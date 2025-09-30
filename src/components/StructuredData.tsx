export function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Farouk",
    jobTitle: "Full-Stack Developer",
    email: "farwqahmd118@gmail.com",
    telephone: "+201091279723",
    url: "https://ahmedfarouk.dev",
    sameAs: [
      "https://github.com/ahmefarouk1234d",
      "https://linkedin.com/in/ahmed-farouk",
    ],
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Firebase",
      "Web Development",
      "Full-Stack Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Tech Academy",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function CreativeWorkSchema() {
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    author: {
      "@type": "Person",
      name: "Ahmed Farouk",
    },
    name: "Ahmed Farouk Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects, skills, and experience in TypeScript, Next.js, and Firebase.",
    url: "https://ahmedfarouk.dev",
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
    />
  );
}
