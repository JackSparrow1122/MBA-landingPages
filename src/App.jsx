import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Computer from './pages/Computer';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ApplyNowButton from './components/ApplyNowButton';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/igsb" element={<PageWithDynamicTitle title="igsb" />} />
        </Routes>
        <Footer />
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
        <title>{dynamicTitle}</title>
      </Helmet>

      {title === "igsb" && <Computer />}
       
    </>
  );
}

export default App;
