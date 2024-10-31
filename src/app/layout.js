import '../styles/globals.css';

export const metadata = {
  title: 'Milad Maker',
  description: 'Milad Maker - A collection of 10k neochibi hellions inspired by @miladymaker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white antialiased bg-gray-900">
        {children}
      </body>
    </html>
  );
}