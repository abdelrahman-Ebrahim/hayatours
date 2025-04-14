import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hayat Tours",
  description: "Hayat Tours Travels",
  icons: {
    icon: "/hayatLogo.png",
    shortcut: "/hayatLogo.png",
    apple: "/hayatLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
