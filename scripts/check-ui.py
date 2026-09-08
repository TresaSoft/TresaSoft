"""Browser smoke check. Start Vite, then run: python scripts/check-ui.py.

Requires Python Playwright and its Chromium browser. Optional first argument: URL.
Screenshots go to node_modules/.cache/ui-check (ignored by Git).
No contact messages are sent and no external contact links are opened.
"""

import re
import sys
from pathlib import Path

from playwright.sync_api import expect, sync_playwright


URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:5173/"
OUTPUT = Path(__file__).resolve().parents[1] / "node_modules/.cache/ui-check"
OUTPUT.mkdir(parents=True, exist_ok=True)


with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("console", lambda message: errors.append(message.text) if message.type == "error" and "mailto:" not in message.text else None)
    page.goto(URL)
    page.evaluate("document.fonts.ready")
    expect(page.locator("h1")).to_contain_text("Tecnología clara")
    assert page.locator("main > section").count() == 5
    assert page.evaluate("Array.from(document.images).every(image => image.complete && image.naturalWidth > 0)")
    header = page.locator(".site-header")
    expect(header).to_have_class(re.compile("site-header-transparent"))
    assert header.evaluate("element => getComputedStyle(element).backgroundColor") != "rgba(0, 0, 0, 0)"
    hero_half = page.locator("#inicio").evaluate("element => element.offsetTop + element.offsetHeight / 2")
    page.evaluate("position => scrollTo(0, position - 2)", hero_half)
    expect(header).to_have_class(re.compile("site-header-transparent"))
    page.evaluate("position => scrollTo(0, position + 2)", hero_half)
    expect(header).to_have_class(re.compile("site-header-solid"))
    assert header.evaluate("element => getComputedStyle(element).backgroundColor") != "rgba(0, 0, 0, 0)"
    page.evaluate("scrollTo(0, 0)")
    expect(header).to_have_class(re.compile("site-header-transparent"))
    page.screenshot(path=str(OUTPUT / "desktop.png"), full_page=True)
    page.screenshot(path=str(OUTPUT / "desktop-hero.png"))
    page.locator("#servicios").screenshot(path=str(OUTPUT / "desktop-services.png"))

    # Service dialogs: native focus containment, all offerings, dismissal and navigation.
    service_buttons = page.locator("#servicios article button")
    for index in range(3):
        opener = service_buttons.nth(index)
        opener.click()
        dialog = page.locator("dialog[open]")
        expect(dialog).to_be_visible()
        assert page.evaluate("document.body.style.overflow") == "hidden"
        for key in ["Tab"] * 5 + ["Shift+Tab"] * 5:
            page.keyboard.press(key)
            # Chromium may focus its browser chrome between tab cycles (body is
            # then active), but must never focus an element behind the dialog.
            assert page.evaluate("document.activeElement === document.body || document.activeElement.closest('dialog') !== null")
        if index == 0:
            page.screenshot(path=str(OUTPUT / "service-dialog.png"))
        page.keyboard.press("Escape")
        expect(page.locator("dialog")).to_have_count(0)
        expect(opener).to_be_focused()
        assert page.evaluate("document.body.style.overflow") == ""

    service_buttons.first.click()
    page.mouse.click(5, 5)
    expect(page.locator("dialog")).to_have_count(0)
    service_buttons.first.click()
    page.get_by_role("link", name="Consultar por este servicio").click()
    expect(page.locator("dialog")).to_have_count(0)
    assert page.evaluate("location.hash") == "#contacto"
    assert 80 <= page.locator("#contacto").bounding_box()["y"] <= 110

    # Whitespace must fail; correcting either field must clear its custom error.
    page.locator("#contact-name").fill("   ")
    page.locator("#contact-message").fill("   ")
    page.get_by_role("button", name="Preparar correo").click()
    assert page.locator("#contact-name").evaluate("field => !field.validity.valid")
    page.locator("#contact-name").fill(" Laura & negocio ")
    page.locator("#contact-message").fill(" Necesito una web con catálogo. ")
    assert page.locator("form").evaluate("form => form.checkValidity()")
    # Observe the prepared mailto in headless Chromium; no email is sent.
    cdp = page.context.new_cdp_session(page)
    cdp.send("Page.enable")
    mailto = []
    cdp.on("Page.frameRequestedNavigation", lambda event: mailto.append(event["url"]) if event["url"].startswith("mailto:") else None)
    page.get_by_role("button", name="Preparar correo").click()
    page.wait_for_timeout(200)
    assert any("subject=Consulta%20de%20Laura%20%26%20negocio" in url and "cat%C3%A1logo" in url for url in mailto), mailto
    cdp.detach()

    # WhatsApp links are inspected without navigating to or messaging anyone.
    whatsapp = page.locator('button[aria-controls="whatsapp-contacts"]')
    whatsapp.click()
    chooser = page.locator("#whatsapp-contacts")
    expect(chooser).to_be_visible()
    expect(chooser.get_by_role("link", name=re.compile("Mateo"))).to_be_focused()
    links = chooser.locator("a").evaluate_all("links => links.map(link => link.href)")
    assert "5492983388094" in links[0] and "5492983600680" in links[1]
    page.keyboard.press("Escape")
    expect(chooser).to_have_count(0)
    expect(whatsapp).to_be_focused()
    whatsapp.click()
    page.locator("#contact-heading").click()
    expect(chooser).to_have_count(0)

    # Real breakpoints, including narrow phones and the tablet navigation boundary.
    for width in [320, 375, 390, 640, 768, 1024, 1280, 1920]:
        page.set_viewport_size({"width": width, "height": 844})
        page.goto(URL)
        page.evaluate("document.fonts.ready")
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Horizontal overflow at {width}px"
        if width < 1024:
            toggle = page.get_by_role("button", name="Abrir menú principal")
            expect(toggle).to_be_visible()
            toggle.click()
            menu = page.locator("#mobile-navigation")
            expect(menu).to_be_visible()
            bounds = menu.bounding_box()
            assert 79 <= bounds["y"] <= 83 and bounds["y"] + bounds["height"] <= 844
            page.keyboard.press("Escape")
            expect(menu).to_be_hidden()
            expect(toggle).to_be_focused()
            toggle.click()
            menu.get_by_role("link", name="Servicios", exact=True).click()
            expect(menu).to_be_hidden()
            assert 80 <= page.locator("#servicios").bounding_box()["y"] <= 110
        if width in [375, 768]:
            page.goto(URL)
            page.evaluate("document.fonts.ready")
            page.screenshot(path=str(OUTPUT / f"width-{width}.png"), full_page=True)
        if width == 375:
            page.screenshot(path=str(OUTPUT / "mobile-hero.png"))
            page.locator("#contacto").screenshot(path=str(OUTPUT / "mobile-contact.png"))
            page.locator("#servicios article button").last.click()
            dialog = page.locator("dialog[open]")
            bounds = dialog.bounding_box()
            assert bounds["x"] >= 0 and bounds["width"] <= width
            assert bounds["y"] >= 0 and bounds["height"] <= 844
            expect(dialog.get_by_role("link", name="Consultar por este servicio")).to_be_in_viewport()
            page.screenshot(path=str(OUTPUT / "mobile-dialog.png"))
            page.keyboard.press("Escape")

    assert page.evaluate("getComputedStyle(document.documentElement).scrollBehavior") == "auto"
    assert page.locator(".hero-copy").evaluate("element => getComputedStyle(element).animationName") == "none"
    page.set_viewport_size({"width": 568, "height": 320})
    page.goto(URL)
    page.locator("#servicios article button").last.click()
    dialog = page.locator("dialog[open]")
    dialog.get_by_role("link", name="Consultar por este servicio").scroll_into_view_if_needed()
    expect(dialog.get_by_role("link", name="Consultar por este servicio")).to_be_in_viewport()
    page.keyboard.press("Escape")
    whatsapp.click()
    bounds = chooser.bounding_box()
    assert bounds["y"] >= 0 and bounds["y"] + bounds["height"] <= 320
    chooser.get_by_role("link", name=re.compile("Juan")).scroll_into_view_if_needed()
    expect(chooser.get_by_role("link", name=re.compile("Juan"))).to_be_in_viewport()
    page.keyboard.press("Escape")
    assert not errors, errors
    browser.close()
    print("PASS: responsive layout (8 widths), navigation, all service dialogs, keyboard, contact validation, mailto, WhatsApp, reduced motion and console.")
    print(f"Screenshots: {OUTPUT}")
