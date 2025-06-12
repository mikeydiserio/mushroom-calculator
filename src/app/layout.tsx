"use client";
import FooterComponent from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
