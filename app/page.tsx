import ArtSection from "./components/ArtSection";
import CTAButtons from "./components/CTAButtons";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import ProductGallery from "./components/ProductGallery";


export default function Home() {
  return (
    <div className="bg-secondary text-[var(--color-foreground)]">
      <HeroBanner />
      <CTAButtons />
      <ArtSection />
      <ProductGallery />
      <Footer />
    </div>
  );

}
