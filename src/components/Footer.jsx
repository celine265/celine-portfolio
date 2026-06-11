import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../constants/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-600 bg-surface-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {year} {personalInfo.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/celine265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/celina-bulyar-59a6453a5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bulyarcelina@gmail.com"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
