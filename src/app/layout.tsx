import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASTA CLOUD - Marketplace Terpercaya",
  description: "Solusi lengkap untuk kebutuhan digital dan teknologi Anda. Layanan profesional, produk berkualitas, domain & hosting.",
  keywords: ["ASTA CLOUD", "Marketplace", "Domain", "Hosting", "Desain", "Teknologi", "Produk Digital"],
  authors: [{ name: "ASTA CLOUD" }],
  icons: {
    icon: "https://image2url.com/r2/default/images/1771769196446-c72ec0aa-5f99-4546-88fc-ce31d5ef6cc9.jpg",
  },
  openGraph: {
    title: "ASTA CLOUD - Marketplace Terpercaya",
    description: "Solusi lengkap untuk kebutuhan digital dan teknologi Anda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
