import AboutUs from "@/layouts/AboutUs";
import Presentation from "@/layouts/Presentation";
import DataNumbers from "@/layouts/DataNumbers";
import Header from "@/layouts/header";
import Recomendations from "@/layouts/Recomendations";
import SocialProjects from "@/layouts/SocialProjects";
import DownloadApp from "@/layouts/DownloadApp";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Presentation />
      <AboutUs />
      <Recomendations />
      <DataNumbers />
      <SocialProjects />
      <DownloadApp />
      <Footer />
    </div>
  );
}
