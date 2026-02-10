import "./globals.css";

export const metadata = {
  title: "Weronika Kmiec creating for the world wide web",
  description:
    "An autodidact developer unearthing the in-between of virtual and real.",
  icons: {
    icon: "/public/smile.ico",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://wercche.xyz/",
  },
  openGraph: {
    title: "wercche",
    type: "website",
    url: "https://wercche.xyz/",
    siteName: "wercche",
    locale: "en_US",
    images: "/public/og-image.png",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
