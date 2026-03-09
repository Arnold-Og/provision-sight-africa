import ScrollReveal from '@/components/ScrollReveal';
import { Instagram, Linkedin, Mail, QrCode } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/provisionsightafrica/', handle: '@provisionsightafrica' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/provision-sight-africa', handle: 'Provision Sight Africa' },
  { icon: Mail, label: 'Email', url: 'mailto:blindsightafrica@gmail.com', handle: 'blindsightafrica@gmail.com' },
];

const qrCodes = [
  { label: 'Instagram', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.instagram.com/provisionsightafrica/&bgcolor=0d1512&color=2f9e6e&format=svg' },
  { label: 'LinkedIn', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/company/provision-sight-africa&bgcolor=0d1512&color=2f9e6e&format=svg' },
  { label: 'Website', url: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://provisionsightafrica.com&bgcolor=0d1512&color=2f9e6e&format=svg' },
];

const SocialConnect = () => (
  <section className="py-20 bg-card" aria-labelledby="social-heading">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 id="social-heading" className="text-3xl font-bold text-foreground text-center mb-4">
          Follow Our <span className="text-gradient-accent">Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Stay connected and follow our progress across Africa.</p>
      </ScrollReveal>

      {/* Social links */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {socials.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <a
              href={s.url}
              target={s.url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group focus-visible-ring"
              aria-label={`${s.label}: ${s.handle}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.handle}</div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* QR Codes */}
      <ScrollReveal>
        <div className="flex items-center justify-center gap-2 mb-6">
          <QrCode className="w-5 h-5 text-primary" aria-hidden="true" />
          <h3 className="text-xl font-bold text-foreground">Connect With Provision</h3>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
        {qrCodes.map((qr, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="text-center">
              <div className="bg-foreground rounded-xl p-3 inline-block">
                <img src={qr.url} alt={`QR code for ${qr.label}`} className="w-24 h-24" loading="lazy" />
              </div>
              <p className="text-xs font-bold text-muted-foreground mt-2">{qr.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SocialConnect;
