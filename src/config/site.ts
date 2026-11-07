export const siteConfig = {
  name: "Harvi IT Solutions",
  description: "Harvi IT Solutions is an IT services company providing web development, custom software development, mobile application development and AI solutions for businesses and startups.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harviitsolutions.com",
  logoUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://harviitsolutions.com"}/logo.png`, // Assuming a logo.png exists in public/
  contact: {
    email: "contact@harviitsolutions.com",
    phone: "+1-555-0198",
  },
  socials: [
    "https://www.linkedin.com/company/harviitsolutions",
    "https://twitter.com/harviitsolutions",
    "https://github.com/harviitsolutions"
  ]
};
