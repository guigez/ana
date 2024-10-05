import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto px-5 flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex-grow">
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
