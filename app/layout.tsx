import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
import AuthProvider from '@/app/Provider'
import Signup from './signup/page';
import { SessionProvider } from "next-auth/react";
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
        {children}
        </SessionProvider>
      {/* <h1>Hello</h1> */}
      </body>
    </html>
  );
}

