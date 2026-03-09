import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, ArrowRight } from 'lucide-react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Please enter a valid email'),
  organization: z.string().trim().optional(),
  role: z.string().min(1, 'Please select a role'),
  location: z.string().trim().min(1, 'Location is required'),
});

const UserTestingForm = () => {
  const [form, setForm] = useState({ name: '', email: '', organization: '', role: '', location: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow";

  return (
    <section className="py-20" aria-labelledby="testing-heading">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-secondary" aria-hidden="true" />
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20">
              Get Involved
            </span>
          </div>
          <h2 id="testing-heading" className="text-3xl font-bold text-foreground text-center mb-4">
            Join Our <span className="text-gradient-accent">User Testing</span> Program
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            The Provision app is in beta testing. We're working with visually impaired users and partner organizations to improve the system. Join us.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          {submitted ? (
            <div className="text-center p-12 rounded-xl bg-card border border-primary/30" role="status">
              <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
              <p className="text-muted-foreground">We'll be in touch about user testing opportunities.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-card border border-border space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="ut-name" className="block text-sm font-bold text-foreground mb-2">Name *</label>
                  <input id="ut-name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-sm text-destructive mt-1" role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="ut-email" className="block text-sm font-bold text-foreground mb-2">Email *</label>
                  <input id="ut-email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-sm text-destructive mt-1" role="alert">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="ut-org" className="block text-sm font-bold text-foreground mb-2">Organization (optional)</label>
                <input id="ut-org" type="text" value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label htmlFor="ut-role" className="block text-sm font-bold text-foreground mb-2">I am... *</label>
                <select id="ut-role" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className={inputClass} aria-invalid={!!errors.role}>
                  <option value="">Select an option</option>
                  <option value="visually-impaired">A visually impaired individual</option>
                  <option value="supporter">Supporting accessibility work</option>
                  <option value="organization">Representing an organization</option>
                  <option value="researcher">A researcher in assistive technology</option>
                </select>
                {errors.role && <p className="text-sm text-destructive mt-1" role="alert">{errors.role}</p>}
              </div>
              <div>
                <label htmlFor="ut-location" className="block text-sm font-bold text-foreground mb-2">Location *</label>
                <input id="ut-location" type="text" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className={inputClass} placeholder="e.g. Nairobi, Kenya" aria-invalid={!!errors.location} />
                {errors.location && <p className="text-sm text-destructive mt-1" role="alert">{errors.location}</p>}
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:opacity-90 transition-opacity focus-visible-ring glow-accent">
                Request to Join User Testing <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UserTestingForm;
