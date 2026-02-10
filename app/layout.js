import "./globals.css";

export const metadata = {
  title: "wercche – creative technologist making things on the internet",
  description:
    "Web developer & visual creator unearthing the in-between of virtual and real. I build interactive experiences, 3D experiments, and whatever else catches my curiosity. Self-taught and figuring it out as I go.",
  icons: {
    icon: "/smile.ico",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://wercche.xyz/",
  },
  openGraph: {
    title: "wercche – creative technologist making things on the internet",
    description:
      "Web developer & visual creator unearthing the in-between of virtual and real. I build interactive experiences, 3D experiments, and whatever else catches my curiosity. Self-taught and figuring it out as I go.",
    type: "website",
    url: "https://wercche.xyz/",
    siteName: "wercche",
    locale: "en_US",
    images: "/og-image.jpg",
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
