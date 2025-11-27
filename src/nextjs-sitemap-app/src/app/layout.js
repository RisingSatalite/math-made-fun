import './globals.css';

export const metadata = {
  title: 'Next.js Sitemap App',
  description: 'A Next.js application that generates an XML sitemap for Google.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}