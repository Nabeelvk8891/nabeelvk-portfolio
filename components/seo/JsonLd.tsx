export default function JsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://nabeelvk.vercel.app/#person",

      name: "Muhammed Nabeel VK",
      alternateName: [
        "Nabeel",
        "Nabeel VK",
        "Muhammed Nabeel",
        "Nabeel Developer"
      ],

      givenName: "Muhammed Nabeel",
      familyName: "VK",

      url: "https://nabeelvk.vercel.app",
      mainEntityOfPage: "https://nabeelvk.vercel.app",
      jobTitle: "Full Stack MERN Developer",

      image: "https://nabeelvk.vercel.app/profile.jpg",

      sameAs: [
        "https://github.com/nabeel8891",
        "https://www.linkedin.com/in/muhammed-nabeel-vk/"
      ],

      description:
        "Muhammed Nabeel VK is a Full Stack MERN Developer based in Calicut, India specializing in React, Next.js, Node.js, and MongoDB, building modern scalable web applications.",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Calicut",
        addressCountry: "India"
      },

      knowsAbout: [
        "Full Stack Development",
        "MERN Stack",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "Web Development"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://nabeelvk.vercel.app/#website",
      url: "https://nabeelvk.vercel.app",
      name: "Muhammed Nabeel Portfolio",
      alternateName: "Nabeel Portfolio"
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
