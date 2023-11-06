import '../styles/globals.css';
import Navbar from '../components/common/navbar/index';
import Script from "next/script";

export const metadata = {
  title: "Raunak'23",
  description: "",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className = 'bg text'>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MEY3XLGKFJ"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-MEY3XLGKFJ');`}
      </Script>
      <body>
      <Navbar />
      {children}</body>
    </html>
  )
}
