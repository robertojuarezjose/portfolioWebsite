
import {Inter} from 'next/font/google'
import "./globals.css";
import Container from '@/components/global/Container';
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/app/providers";
import Footer from "@/components/footer/footer";


const inter = Inter({subsets: ['latin']})


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;
}>) {


    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>

        <Providers>
            <Navbar/>
            <Container className='flex flex-col min-h-screen'>{children}</Container>
            <Footer/>
        </Providers>

        </body>
        </html>
    );
}
