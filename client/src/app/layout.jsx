import '../styles/globals.css';
import Navbar from '../components/common/navbar/index';

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
      {children}</body>
    </html>
  )
}
