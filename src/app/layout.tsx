import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create your online shop today",
  description: "Easy and efficient buying and selling of goods on cumpus",
  icons: [{ rel: "icon", url: "/favicon.ico" }],

  twitter: {
    card: 'summary_large_image',
    title:
      'swipe- create your own shop and sell goods to a large audience and at a lower cost',
    description:
      'Quickly  set-up your shop and upload the goods you are selling  to other students conviniently.',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />

          </ThemeProvider>
          </MantineProvider>
        </body>
    </html>
  );
}
