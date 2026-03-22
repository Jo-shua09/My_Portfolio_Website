import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
}

const SEO = ({ title, description, name = "Joshua Onyeka", type = "website", url = "https://joshwebfolio.vercel.app" }: SEOProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | Joshua Onyeka</title>
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
