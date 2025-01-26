import { BrowserRouter, Route, Routes } from "react-router";
import { RoutesList } from "./Routes/routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { SearchContext } from "./state/searchContext";

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          {RoutesList.map((routes, index) => {
            return (
              <Route
                key={`route-${index}`}
                path={routes.path}
                element={<routes.element />}
              />
            );
          })}
        </Routes>
        <Footer />
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
