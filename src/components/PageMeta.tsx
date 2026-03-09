import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE_NAME = 'Provision Sight Africa';
const BASE_URL = 'https://provision-sight-vision.lovable.app';
const OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/3S3sI8ucp2RpG0Wrw3JL4iHGHA13/social-images/social-1772789232430-Provision_New_logo.webp';

const PageMeta = ({ title, description, path, type = 'website' }: PageMetaProps) => {
  const fullTitle = path === '/' ? `${SITE_NAME} — AI-Powered Navigation for the Visually Impaired` : `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default PageMeta;
