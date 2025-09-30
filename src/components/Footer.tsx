import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3">Ahmed Farouk</h3>
            <p className="text-[var(--muted)] text-sm">
              Full-stack developer specializing in TypeScript, Next.js, and Firebase.
              Building modern, scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-[var(--muted)] hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-[var(--muted)] hover:text-blue-600 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-[var(--muted)] hover:text-blue-600 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--muted)] hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:farwqahmd118@gmail.com"
                  className="text-[var(--muted)] hover:text-blue-600 transition-colors"
                >
                  farwqahmd118@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201091279723"
                  className="text-[var(--muted)] hover:text-blue-600 transition-colors"
                >
                  +20 109 127 9723
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201091279723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-blue-600 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
          <p>© {currentYear} Ahmed Farouk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
