import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/shared/components/nav/Navbar";
import { ViewTransitions } from "next-view-transitions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Rezza makeup",
  description:
    "Descubre los mejores productos de maquillaje en Rezza. Ofrecemos una amplia gama de cosméticos de alta calidad, desde bases y sombras hasta labiales y brochas. Compra en línea y realza tu belleza con Rezza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased"
          )}
        >
          {children}
          <ToastContainer />
        </body>
      </html>
    </ViewTransitions>
  );
}
