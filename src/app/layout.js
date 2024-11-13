"use client"

import './globals.css'
import { Providers } from './providers'
import { roboto } from "../app/lib/fonts";
import NavBar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { usePathname } from 'next/navigation';

const metadata = {
  title: 'Jerin,s Parlour',
  description: 'A beauty salon',
};


export default function RootLayout({ children }) {
  const targetPath = usePathname();

  const navbarAndFooter = ![
    '/dashboard',
    '/dashboard/book',
    '/dashboard/booking-list',
    '/dashboard/review',
    '/admin-dashboard',
    '/admin-dashboard/order-list',
    '/admin-dashboard/add-service',
    '/admin-dashboard/make-admin',
    '/admin-dashboard/manage-services',
  ].includes(targetPath);

  return (
    <html lang="en">
      <body className={roboto.className}>
        {navbarAndFooter ? (
          <Providers>
            <NavBar />
            {children}
            <Footer />
          </Providers>
        ) : (
          children
        )}
      </body>
    </html>
  )
}
