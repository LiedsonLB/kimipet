import AboutUs from "@/partials/AboutUs";
import Presentation from "@/partials/Presentation";
import DataNumbers from "@/partials/DataNumbers";
import Recomendations from "@/partials/Recomendations";
import SocialProjects from "@/partials/SocialProjects";
import DownloadApp from "@/partials/DownloadApp";
import Footer from "@/partials/Footer";
import Header from "@/partials/header";

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
