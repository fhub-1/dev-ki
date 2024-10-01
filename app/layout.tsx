import type { Metadata } from "next";
 import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Provider } from "@/components/provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils"; 

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Montserrat({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "JK | Portfolio",
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
      className={cn(
        'flex min-h-screen flex-col font-sans antialiased',
        inter.variable,
        playfair.variable
      )}
      >
        <Provider>
          <Header />
          <main className="grow">{children}</main>
           <Footer />
        </Provider>
      </body>
    </html>
  );
}
