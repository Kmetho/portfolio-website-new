import "./globals.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="./images/smile.ico" />
        <title>𝗪𝗲𝗿𝗼𝗻𝗶𝗸𝗮 𝗞𝗺𝗶𝗲𝗰 creating for the world wide web</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wercche.xyz/" />
        <link rel="stylesheet" href="https://use.typekit.net/gpq0zkv.css" />
        <meta property="og:image" content="./images/smile.ico" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="wercche" />
        <meta property="og:url" content="https://wercche.xyz/" />
        <meta property="og:site_name" content="wercche" />
        <meta
          name="description"
          content="An autodidact developer unearthing the in-between of virtual and real."
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
