import './globals.css'

export const metadata = {
  title: "Raunak'23",
  description: "",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
