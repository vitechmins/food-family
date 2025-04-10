import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { MyContextProvider } from "@/contexts/MyContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Кафе в Минске | Завтраки, обеды, ужины",
  description: "Приходите в наше кафе в Минске и наслаждайтесь вкусными завтраками, обедами и ужинами в уютной атмосфере. Лучшие сорта Итальянского кофе и вкусные десерты.",
  keywords: "Кафе, меню кафе, кафе минск",
  alternates: {
    canonical: 'https://food-family.by/'
  },
  ogTitle: 'Кафе в Минске | Завтраки, обеды, ужины',
  ogDescription: 'Приходите в наше кафе в Минске и наслаждайтесь вкусными завтраками, обедами и ужинами в уютной атмосфере. Лучшие сорта Итальянского кофе и вкусные десерты.',
  ogImage: 'my-app/public/fon/fon2.webp',
  twitterTitle: 'Кафе в Минске | Завтраки, обеды, ужины',
  twitterDescription: 'Приходите в наше кафе в Минске и наслаждайтесь вкусными завтраками, обедами и ужинами в уютной атмосфере. Лучшие сорта Итальянского кофе и вкусные десерты.',
  twitterImage: 'my-app/public/fon/fon2.webp'
};



export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="google-site-verification" content="g3BoW6Yn5uyvG9n8vDiCI1xPlXjkDpumzQDZ4DXtSNQ" />
      </head>
      <MyContextProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </MyContextProvider>
    </html>
  );
}
