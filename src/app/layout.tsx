import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "./providers";
import { auth } from "@/auth";
import { ToastContainer } from "react-toastify";

const montserratSans = localFont({
    src: "./fonts/Montserrat-VariableFont_wght.ttf",
    variable: "--font-montserrat-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Team 5",
    description: "Team 5 x Doer collab",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    console.log(session);
    return (
        <html lang="en">
            <body className={`${montserratSans.variable} antialiased scroll-hidden`}>
                <Providers>
                    <div className="app-container">
                        <Header session={session} />
                        <ToastContainer position="top-right" autoClose={3000} />
                        {children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
