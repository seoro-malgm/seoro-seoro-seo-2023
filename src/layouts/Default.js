import { GlobalFooter } from "components/GlobalFooter";
import { GlobalNav } from "components/GlobalNav";
import { Route, Routes } from "react-router-dom";

// pages
import { Contact } from "pages/Contact";
import { Home } from "pages/Home";

function Default() {
  return (
    <div className="layout-default">
      <header>
        <GlobalNav />
      </header>
      <main id="main" className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <GlobalFooter />
    </div>
  );
}

export default Default;
