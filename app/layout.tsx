import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "ptGPT - ChatGPT Plugin for Parenting Advice",
  description:
    "ptGPT is a ChatGPT Plugin to get parenting advice from the Parent's Together website. Developed with Next.js and hosted on Vercel's Edge Network.",
  twitter: {
    card: "summary_large_image",
    title: "ptGPT - ChatGPT Plugin for Parenting Advice",
    description:
      "ptGPT is a ChatGPT Plugin to get parenting advice from the Parent's Together website. Developed with Next.js and hosted on Vercel's Edge Network.",
    creator: "@roskideluge",
  },
  metadataBase: new URL("https://ptgpt.vercel.app"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
