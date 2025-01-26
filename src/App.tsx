import { BrowserRouter, Route, Routes } from "react-router";
import { RoutesList } from "./Routes/routes";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {RoutesList.map((routes) => {
          return <Route path={routes.path} element={routes.element()} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
