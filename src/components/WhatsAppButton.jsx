import { profile } from '../data/profile'
import { icons } from './SocialIcons'

// Floating "chat on WhatsApp" button, fixed to the bottom-right corner
export default function WhatsAppButton() {
  if (!profile.whatsapp) return null
  return (
    <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
      {icons.whatsapp}
      <span className="wa-float__label">Chat on WhatsApp</span>
    </a>
  )
}
