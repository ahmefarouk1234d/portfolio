export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Advanced TypeScript",
    issuer: "TypeScript Academy",
    date: "2024",
    image: "/certs/placeholder-cert-1.jpg",
    description: "Advanced TypeScript patterns and best practices",
  },
  {
    id: "2",
    title: "Next.js Professional",
    issuer: "Vercel",
    date: "2024",
    image: "/certs/placeholder-cert-2.jpg",
    description: "Building production-ready Next.js applications",
  },
  {
    id: "3",
    title: "Firebase Expert",
    issuer: "Google Cloud",
    date: "2023",
    image: "/certs/placeholder-cert-3.jpg",
    description: "Firebase platform expertise certification",
  },
  {
    id: "4",
    title: "React Advanced Patterns",
    issuer: "React Training",
    date: "2023",
    image: "/certs/placeholder-cert-4.jpg",
    description: "Advanced React patterns and performance optimization",
  },
  {
    id: "5",
    title: "Web Accessibility (WCAG)",
    issuer: "W3C",
    date: "2023",
    image: "/certs/placeholder-cert-5.jpg",
    description: "Web accessibility standards and implementation",
  },
  {
    id: "6",
    title: "Cloud Architecture",
    issuer: "AWS",
    date: "2022",
    image: "/certs/placeholder-cert-6.jpg",
    description: "Cloud architecture and deployment strategies",
  },
];
