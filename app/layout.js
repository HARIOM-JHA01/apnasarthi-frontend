import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font_nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Apna Sarthi",
    description:
        "Our service platform consolidates all types of rental vehicles, offering options for both self-driving and renting with a driver. We provide convenient vehicle delivery and pickup services, catering to both short-term and long-term rental needs. Additionally, we offer various tour packages for exploring the beautiful tourist destinations of Bihar, ensuring a seamless and enjoyable travel experience for our customers.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font_nunito.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
