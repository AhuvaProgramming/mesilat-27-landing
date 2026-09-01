import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מסילת ישרים 27',
  description: 'דירות חדשות להשכרה בלב ירושלים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
