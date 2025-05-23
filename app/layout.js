import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({ children }) {
    return (
        <Providers>
            <html lang="fr">
                <body
                    className={`container mx-auto  max-w-[1200px] ${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    {children}
                </body>
            </html>
        </Providers>
    )
}
