import type { Metadata } from "next";
<<<<<<< HEAD
import { Roboto, Playfair_Display } from "next/font/google";
=======
import { Roboto, Great_Vibes } from "next/font/google";
>>>>>>> 8a9a3b13dae61f2b7ddd29714737ade9083c47a6
import "./globals.css";

const roboto = Roboto({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-roboto",
});

<<<<<<< HEAD
const playfair = Playfair_Display({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
=======
const greatVibes = Great_Vibes({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
>>>>>>> 8a9a3b13dae61f2b7ddd29714737ade9083c47a6
});

export const metadata: Metadata = {
  title: "Dr. Swami Karri | Senior Consultant Radiologist & Healthcare Entrepreneur",
  description:
    "Dr. Karri Swami (MBBS, DNB) — Senior Consultant Radiologist with 12+ years of experience, Founder & CEO of Aayushman Hospital, Vizag. Expert in ultrasound, CT, MRI and pediatric diagnostic care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={`${roboto.variable} ${playfair.variable} h-full antialiased`}
=======
      className={`${roboto.variable} ${greatVibes.variable} h-full antialiased`}
>>>>>>> 8a9a3b13dae61f2b7ddd29714737ade9083c47a6
    >
      <body className="bg-white flex min-h-full flex-col font-body text-foreground">
        {children}
      </body>
    </html>
  );
}