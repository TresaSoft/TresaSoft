import { ArrowUpRight, Code2, Terminal } from 'lucide-react'
import { teamMembers } from '../data/teamData.js'

// lucide-react no trae íconos de marcas: mismo trazo (2 px, puntas redondeadas).
function GithubIcon() {
  return (
    <svg width="18" height="18" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

// jcperalta.dev, sin https:// ni barra final
const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const stickerIcons = { code: Code2, terminal: Terminal }

export default function TeamBlock() {
  return (
    <div className="tm" aria-labelledby="team-title">
      <h3 id="team-title" className="tm-title">Nuestro equipo</h3>

      <ul className="tm-list">
        {teamMembers.map(({ name, role, sticker, image, portfolio, github }) => {
          const StickerIcon = stickerIcons[sticker] ?? Code2
          return (
            <li key={name} className="tm-card">
              <span className={`tm-sticker tm-sticker-${sticker}`} aria-hidden="true">
                {image ? <img src={image} alt="" /> : <StickerIcon size={18} strokeWidth={2.25} />}
              </span>
              <div className="tm-info">
                <p className="tm-role">{role}</p>
                <p className="tm-name">{name}</p>
                {(portfolio || github) && (
                  <div className="tm-links">
                    {portfolio && (
                      <a href={portfolio} target="_blank" rel="noopener noreferrer" aria-label={`Página personal de ${name}: ${displayUrl(portfolio)} (se abre en una pestaña nueva)`}>
                        <span>{displayUrl(portfolio)}</span><ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                    {github && (
                      <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${name} (se abre en una pestaña nueva)`}>
                        <GithubIcon /><span>GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
