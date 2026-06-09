import { personalInfo } from '../constants/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-600 bg-surface-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Designed &amp; Built with{' '}
            <span className="text-accent">React</span> &amp;{' '}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
