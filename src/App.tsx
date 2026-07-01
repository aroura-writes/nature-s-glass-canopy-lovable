import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import { SectionIndex } from "@/pages/SectionIndex";
import { SectionPost } from "@/pages/SectionPost";
import { sections } from "@/lib/content";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <ScrollToTop />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {sections.map((s) => (
            <Fragment key={s.slug}>
              <Route
                path={`/${s.slug}`}
                element={<SectionIndex section={s} />}
              />
              <Route
                path={`/${s.slug}/:postSlug`}
                element={<SectionPost section={s} />}
              />
            </Fragment>
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
