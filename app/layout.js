import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/siteData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://anees-portfolio.vercel.app"),
  title: `${profile.name} | ${profile.role}`,
  description:
    "Anees Aboobacker — MERN Stack Developer specializing in performant web apps, scalable backend systems, AI-powered workflows, and modern UI engineering.",
  keywords: [
    "Anees Aboobacker",
    "MERN Stack Developer",
    "Portfolio",
    "React Developer",
    "Next.js",
    "Node.js",
    "Full-stack Engineer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0c0c0c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
