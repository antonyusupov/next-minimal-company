import Navbar from '../../components/navbar/Navbar'


export const metadata = {
  title: 'Contact',
  description: 'Contact Page',
}

export default function RootLayout({ children }) {
  return (
    <section>
        {children}
    </section>
  )
}
