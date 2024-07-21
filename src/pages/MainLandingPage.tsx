import FrameComponent5 from "../components/FrameComponent5";
import Hero from "../components/Hero";
import News from "../components/News";
import Agencies from "../components/Agencies";
import Footer from "../components/Footer";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import GuidesReports from "../components/GuidesReports";
import FrameComponent from "../components/FrameComponent";
import "./MainLandingPage.css";

const MainLandingPage = () => {
  return (
    <div className="main-landing-page">
      <section className="rectangle-parent">
        <img className="frame-child" alt="" src="/rectangle-1@2x.png" />
        <FrameComponent5 />
        <Hero />
      </section>
      <News />
      <Agencies />
      <Footer />
      <FrameComponent3 />
      <FrameComponent1 />
      <section className="guides-reports-parent">
        <GuidesReports />
        <FrameComponent />
      </section>
    </div>
  );
};

export default MainLandingPage;
