import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  name?: string;
  type?: string;
  url?: string;
}

const SEO = ({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  name = "Joshua Onyeka",
  type = "website",
  url = "https://joshwebfolio.vercel.app",
}: SEOProps) => {
  const metaKeywords = keywords.length > 0 ? keywords.join(", ") : "software engineer, web developer, react, typescript, portfolio, UI/UX";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    url: url,
    image: image,
    description: description,
    sameAs: ["https://github.com/yourusername", "https://linkedin.com/in/yourusername"],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Joshua Onyeka Portfolio",
    },
  };

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={name} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Joshua Onyeka" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@yourtwitter" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
