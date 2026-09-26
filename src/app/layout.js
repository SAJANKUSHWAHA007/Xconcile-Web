import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeRegistry } from "@/theme";
import SmoothScrollProvider from "@/components/common/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Xconcile | Outsourced Accounting Services for US Businesses",
  description:
    "We provide outsourced accounting and bookkeeping services for U.S. businesses and CPA firms, including reconciliations, financial reporting, AP, AR, and ongoing accounting support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
