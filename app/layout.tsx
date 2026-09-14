import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SafaiSaathi | Smart waste collection tracking",
  description: "Real-time municipal waste collection tracking and civic accountability for cleaner neighborhoods.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
