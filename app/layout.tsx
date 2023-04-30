import './global-style/globals.scss';


export const metadata = {
  title: 'Password manager',
  description: 'Store your passwords',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       
        {children}
      
        
      </body>
    </html>
  )
}
