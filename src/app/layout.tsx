import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import GoogleTranslate from "@/components/shared/GoogleTranslate";

export const metadata: Metadata = {
  title: "SDS Forklift Training Center",
  description: "Elevate your career with industry-leading forklift operation training. NSDC certification programs designed for safety and success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white flex flex-col">
          <GoogleTranslate />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
