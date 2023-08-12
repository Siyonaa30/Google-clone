import "./globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Google Clone",
  description: "google clone created by nextjs 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
