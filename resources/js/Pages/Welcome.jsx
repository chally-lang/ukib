import { Head, Link } from "@inertiajs/react";
import Header from "@/Pages/Home/Header";
import Hero from "@/Pages/Home/Hero";
import Slider from "@/Pages/Home/Slider";
import Features from "@/Pages/Home/Features";
import Newsletter from "@/Pages/Home/Newsletter";
import Footer from "@/Pages/Home/Footer";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    success,
    status,
}) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="E-Library" />

            <main className="overflow-hidden">
                <Header />
                
                <Hero success={success}/>
                
                <Slider />
                <Features />
                <Newsletter status={status} success={success} />
                <Footer />
            </main>

           
        </>
    );
}
