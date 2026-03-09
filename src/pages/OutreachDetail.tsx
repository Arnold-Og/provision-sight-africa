import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowLeft } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { getOutreachById } from '@/data/outreaches';

const OutreachDetail = () => {
  const { id } = useParams<{ id: string }>();
  const outreach = id ? getOutreachById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!outreach) {
    return (
      <div className="container max-w-3xl py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Outreach not found</h1>
        <Link to="/impact" className="text-primary hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to outreaches
        </Link>
      </div>
    );
  }

  const pageTitle = `${outreach.title} — ${outreach.date}`;

  return (
    <div>
      <PageMeta
        title={pageTitle}
        description={outreach.body.slice(0, 160).replace(/\s+/g, ' ').trim() + '…'}
        path={`/impact/outreach/${outreach.id}`}
      />
      <article className="container max-w-4xl py-12 md:py-16">
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{outreach.title}</h1>
          <p className="text-primary font-medium">{outreach.date}</p>
        </header>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          {outreach.images.map((img, j) => (
            <div key={j} className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading={j === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <div className="prose prose-sm max-w-none text-foreground leading-relaxed mb-12">
          <p className="whitespace-pre-line">{outreach.body}</p>
        </div>

        <nav className="flex flex-wrap gap-4 border-t border-border pt-8" aria-label="Outreach navigation">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-4 h-4" aria-hidden /> Back to top
          </button>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden /> Back to outreaches
          </Link>
        </nav>
      </article>
    </div>
  );
};

export default OutreachDetail;
