import { Inter } from "next/font/google";
import Cards from "./components/Front Page/Cards";
import Hero from "./components/Hero";
import SundayDeets from "./components/SundayDeets";
import Welcome from "./components/Welcome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-red-600 flex-grow">
      <Hero />
      <Welcome />
      <Cards />
    </main>
  );
}
