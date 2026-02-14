export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://nabeelvk.vercel.app/#person",

    name: "Muhammed Nabeel VK",
    givenName: "Muhammed Nabeel",
    familyName: "VK",
    alternateName: "Nabeel",

    url: "https://nabeelvk.vercel.app",
    mainEntityOfPage: "https://nabeelvk.vercel.app",
    jobTitle: "Full Stack MERN Developer",

    sameAs: [
      "https://github.com/nabeel8891",
      "https://www.linkedin.com/in/muhammed-nabeel-vk/"
    ],

    knowsAbout: [
      "NABEEL VK",
      "Web Development",
      "Software Engineering",
      
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "MERN Stack",
      "Full Stack Development"
    ],

    description:
      "Full Stack MERN Developer building scalable modern web applications with React, Next.js, Node.js and MongoDB.",

    image: "https://nabeelvk.vercel.app/profile.jpg"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
