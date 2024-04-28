import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import { CartProvider } from "./components/context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./components/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike Ecommerce",
  description: "Nike Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Header />
            <ToastContainer />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
