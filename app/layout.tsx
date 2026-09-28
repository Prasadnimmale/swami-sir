import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-roboto",
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
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="bg-white flex min-h-full flex-col font-body text-foreground">
        {children}
      </body>
    </html>
  );
}