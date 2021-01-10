import NavBar from "../components/NavBar";
import Initial from "../components/_Partials/Initial";
import Intro from "../components/_Partials/Intro";
import Footer from "../components/Footer";
import Menu from "../components/_Partials/Menu";
import Team from "../components/_Partials/Team";

export default function Home() {
  return (
    <>
      <NavBar />
      <Initial />
      <Intro />
      <Menu />
      <Team />
      <Footer />
    </>
  );
}
