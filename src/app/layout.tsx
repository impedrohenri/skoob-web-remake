
import ThemeMode from "@/components/themeMode/themeMode";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Poppins } from 'next/font/google'
import { AuthProvider } from "./contexts/AuthContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" >
      <body className={poppins.className}>
        <ThemeMode display='hidden' />
        <AuthProvider>
          <main>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
