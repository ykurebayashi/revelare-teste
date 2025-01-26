import { BrowserRouter, Route, Routes } from "react-router";
import { RoutesList } from "./Routes/routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {RoutesList.map((routes) => {
          return <Route path={routes.path} element={routes.element()} />;
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
