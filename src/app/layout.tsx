import type { Metadata, Viewport } from "next";
import { Mona_Sans, Great_Vibes } from "next/font/google";
import PageEffects from "@/components/PageEffects";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});



export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "F_BLOCK_14 | Franklin - Official Creator & Business Collaborations",
    template: "%s | F_BLOCK_14",
  },
  description: "Official creator website of Franklin (F_BLOCK_14). Elevating brands through premium collaborations, professional content strategy, and media ventures with Hidden Hand Media.",
  keywords: [
    "F_BLOCK_14",
    "Franklin creator",
    "brand collaborations",
    "Hidden Hand Media",
    "content creator portfolio",
    "business inquiries Franklin",
    "premium digital creator",
    "media campaign partnership",
  ],
  authors: [{ name: "Franklin", url: "https://fblock14.com" }],
  creator: "Franklin",
  metadataBase: new URL("https://fblock14.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fblock14.com",
    title: "F_BLOCK_14 | Franklin - Creator & Brand Partnership Hub",
    description: "Partner with Franklin (F_BLOCK_14). Explore premium brand collaborations, statistics, and media strategy with the founder of Hidden Hand Media.",
    siteName: "F_BLOCK_14",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "F_BLOCK_14 - Official Creator Website & Business Collaborations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "F_BLOCK_14 | Franklin - Official Creator Website",
    description: "Partner with Franklin (F_BLOCK_14). Explore premium brand collaborations, statistics, and media strategy with the founder of Hidden Hand Media.",
    images: ["/og_image.png"],
    creator: "@fblock14",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO and LLMs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://fblock14.com/#person",
        "name": "Franklin",
        "alternateName": "F_BLOCK_14",
        "url": "https://fblock14.com",
        "image": "https://fblock14.com/logo.webp",
        "description": "Premium digital content creator, brand collaborator, and founder of Hidden Hand Media.",
        "sameAs": [
          "https://instagram.com/f_block_14",
          "https://youtube.com/@f_block_14",
        ],
        "jobTitle": "Founder & Creative Director",
        "worksFor": {
          "@type": "Organization",
          "name": "Hidden Hand Media",
          "url": "https://fblock14.com"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://fblock14.com/#organization",
        "name": "Hidden Hand Media",
        "url": "https://fblock14.com",
        "logo": "https://fblock14.com/logo.webp",
        "sameAs": [
          "https://instagram.com/f_block_14"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://fblock14.com/#website",
        "url": "https://fblock14.com",
        "name": "F_BLOCK_14",
        "description": "Franklin (F_BLOCK_14) Official Creator Website",
        "publisher": {
          "@id": "https://fblock14.com/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-white font-sans selection:bg-accent selection:text-bg-dark">
        <PageEffects>
          {children}
        </PageEffects>
      </body>
    </html>
  );
}
