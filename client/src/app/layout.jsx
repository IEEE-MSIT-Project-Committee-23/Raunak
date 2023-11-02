import '../styles/globals.css';
import Navbar from '../components/common/navbar/index';
import Footer from '../components/common/footer/index';

export const metadata = {
  title: "Raunak'23",
  description: "",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className = 'bg text'>
    
      <body>
      <Navbar />
      {children}
      <Footer /></body>
    </html>
  )
}
