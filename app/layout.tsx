import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drswamykarri.com"),
  alternates: {
    canonical: "/",
  },
  title: "Dr. Swamy Karri | Senior Consultant Radiologist & Healthcare Entrepreneur",
  description:
    "Dr. Karri Swamy (MBBS, DNB) — Senior Consultant Radiologist with 12+ years of experience, Founder & CEO of Aayushman Hospital, Vizag. Expert in ultrasound, CT, MRI and pediatric diagnostic care.",
  verification: {
    google: "pHiVNUupCwDmWa6JJPbi8XfSkrE6VTwxvDzv70vDEl8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="bg-white flex min-h-full flex-col font-body text-foreground">
        {children}
      </body>
    </html>
  );
}