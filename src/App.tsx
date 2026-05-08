import { useEffect, useState } from "react";
import Header from "./components/header-component/header";
import LoaderComponent from "./components/loader-component/loader-component";
import LandingPage from "./pages/landing-page";
import Animation from "./pages/animation";
import Footer from "./components/footer-component/footer";
import ProgressBar from "./components/progress-bar/progress-bar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <LoaderComponent/>
      ) : (
        <Animation>
          <ProgressBar/>
          <Header />
          <LandingPage/>
          <Footer/>
        </Animation>
      )}
    </>
  )
}

export default App
