import './globals.css';

export const metadata = {
  title: 'Asperger’s Assessment Quiz',
  description: 'Take a quick and easy quiz to better understand your neurodivergent traits.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white flex flex-col min-h-screen transition-colors duration-300">
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
