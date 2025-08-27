import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header";
import Works from "./components/layout/works";
import Features from "./components/layout/features";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Navbar from "./components/layout/navbar";
import Docs from "./components/pages/docs";
import Resources from "./components/pages/resources";
import Contact from "./components/pages/contact";

import SearchResultsPage from "./components/search/searchResult";
import Docs2 from "./components/pages/docs/docs2";
import Docs3 from "./components/pages/docs/docs3";
import Docs4 from "./components/pages/docs/docs4";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignIn from "./components/auth/signIn";

const queryClient = new QueryClient();

function Home() {
  return (
    <>
      <Header />
      <Works />
      <Features />
    </>
  );
}
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/docs-2" element={<Docs2 />} />
              <Route path="/docs-3" element={<Docs3 />} />
              <Route path="/docs-4" element={<Docs4 />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/" element={<Navigate to="/signin" />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
