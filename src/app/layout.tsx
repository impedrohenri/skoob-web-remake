
import ThemeMode from "@/components/themeMode/themeMode";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Poppins } from 'next/font/google'
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    template: '%s | SKOOB',
    default: 'SKOOB app'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" >
      <body className={poppins.className}>
        <ThemeMode display='hidden' />
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
