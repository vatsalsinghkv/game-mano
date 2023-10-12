import { Footer, Navbar } from '@/components/layouts';
import Provider from '@/components/shared/Provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Game Mano | Online Game Development',
  description:
    'Game Mano is a product development company that exclusively focuses on game entertainment. We craft beautiful and exciting games that people want to continue playing. With our efficient industry experience, we will take care of your gaming needs from start to finish.',
  metadataBase: new URL('https://game-mano.vercel.app/'),
  openGraph: {
    title: 'Game Mano | Online Game Development',
    description:
      'Game Mano is a product development company that exclusively focuses on game entertainment. We craft beautiful and exciting games that people want to continue playing. With our efficient industry experience, we will take care of your gaming needs from start to finish.',
    url: 'https://game-mano.vercel.app/',
    siteName: 'Gaming Mano',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/68834718/274665350-f6b78ed7-fa10-48d6-879b-fab3a981baec.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://user-images.githubusercontent.com/68834718/274665350-f6b78ed7-fa10-48d6-879b-fab3a981baec.png',
        width: 1800,
        height: 1600,
        alt: 'Gaming Mano',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
