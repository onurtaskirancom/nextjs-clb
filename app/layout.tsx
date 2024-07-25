import Footer from "@/components/footer";
import Header from "@/components/header";
import { fontSans } from "@/lib/fonts";
import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import "@/styles/global.css";
import { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  authors: { name: config.author, url: config.socials.site },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      // { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(config.url),
  openGraph: {
    type: "website",
    title: {
      default: config.title,
      template: `%s | ${config.title}`,
    },
    description: config.description,
    siteName: config.title,
    url: config.url,
    images: [config.siteImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: `${config.socials.twitter.replace("https://twitter.com/", "@")}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-TNMWFBYJN0" />
      <body
        className={cn(
          fontSans.variable,
          "text-foreground-primary bg-background min-h-screen font-sans",
          "selection:bg-accent selection:text-white",
        )}>
        <Header />
        <div className="max-w-container-center min-h-screen my-8 lg:my-12">
          {children}
        </div>
        {/* <Sidebar /> */}
        <Footer />
      </body>
    </html>
  );
}
