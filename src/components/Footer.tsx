import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import provisionLogo from '@/assets/provision-logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={provisionLogo} alt="" className="h-8 w-auto" aria-hidden="true" />
              <h3 className="text-lg font-bold text-foreground">
                <span className="text-gradient-primary">Provision</span> Sight Africa
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building affordable AI-powered navigation technology for visually impaired individuals across Africa.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/provisionsightafrica/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring" aria-label="Follow us on Instagram">
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="https://linkedin.com/company/provision-sight-africa" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring" aria-label="Follow us on LinkedIn">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="mailto:blindsightafrica@gmail.com" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors focus-visible-ring" aria-label="Email us">
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/technology', label: 'Technology' },
                { to: '/impact', label: 'Impact' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Get Involved</h4>
            <ul className="space-y-2">
              {[
                { to: '/join', label: 'Join the Mission' },
                { to: '/partners', label: 'Partners' },
                { to: '/contact', label: 'Request a Demo' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Connect</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 inline mr-1.5" aria-hidden="true" />
                blindsightafrica@gmail.com
              </li>
            </ul>
            {/* QR Codes */}
            <div className="mt-4 flex gap-3">
              {[
                { label: 'Instagram', data: 'https://www.instagram.com/provisionsightafrica/' },
                { label: 'LinkedIn', data: 'https://linkedin.com/company/provision-sight-africa' },
                { label: 'Website', data: 'https://provisionsightafrica.com' },
              ].map((qr) => (
                <div key={qr.label} className="text-center">
                  <div className="bg-foreground rounded-md p-1 inline-block">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(qr.data)}&bgcolor=0d1512&color=2f9e6e&format=svg`}
                      alt={`QR code for ${qr.label}`}
                      className="w-12 h-12"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{qr.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Provision Sight Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
