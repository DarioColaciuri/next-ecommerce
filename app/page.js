import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Footer />
    </main>
  );
}
