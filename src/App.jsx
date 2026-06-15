import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ContentProvider } from "./lib/ContentProvider";
import { useContent } from "./lib/useContent";
import AdminGate from "./admin/AdminGate";
import Dashboard from "./admin/Dashboard";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

import Hero from "./components/sections/Hero";
import ExecutiveSummary from "./components/sections/ExecutiveSummary";
import Concept from "./components/sections/Concept";
import Location from "./components/sections/Location";
import Market from "./components/sections/Market";
import Timeline from "./components/sections/Timeline";
import Financials from "./components/sections/Financials";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";

// Maps each sectionOrder key to its component. To add a future section,
// build the component and add it here + in content.js sectionOrder.
const SECTIONS = {
  hero: Hero,
  executiveSummary: ExecutiveSummary,
  concept: Concept,
  location: Location,
  market: Market,
  timeline: Timeline,
  financials: Financials,
  team: Team,
  contact: Contact,
};

function Sections() {
  const { sectionOrder } = useContent();
  const order = sectionOrder?.length ? sectionOrder : Object.keys(SECTIONS);
  return (
    <>
      {order.map((key) => {
        const Section = SECTIONS[key];
        return Section ? <Section key={key} /> : null;
      })}
    </>
  );
}

function PublicSite() {
  return (
    <ContentProvider>
      <Navbar />
      <Sections />
      <Footer />
      <ScrollToTop />
    </ContentProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route
          path="/admin"
          element={
            <AdminGate>
              <Dashboard />
            </AdminGate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}