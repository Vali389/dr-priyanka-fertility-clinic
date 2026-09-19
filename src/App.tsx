import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "@/components/SiteChrome";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { ServicesPage } from "@/pages/Services";
import { BlogPage } from "@/pages/Blog";
import { BlogDetailPage } from "@/pages/BlogDetail";
import { ContactPage } from "@/pages/Contact";
import { NotFoundPage } from "@/pages/NotFound";
import { Toaster } from "@/components/ui/sonner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
