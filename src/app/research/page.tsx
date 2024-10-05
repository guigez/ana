import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ResearchCards } from "@/components/ResearchCards";

export default function Research() {
    return (
        <div className="min-h-screen container mx-auto px-5 flex flex-col">
            <div>
                <Header />
            </div>
            <div className="flex-grow">
                <ResearchCards />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}