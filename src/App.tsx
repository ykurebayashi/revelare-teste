import { BrowserRouter, Route, Routes } from "react-router";
import { RoutesList } from "./Routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesList.map((routes) => {
          return <Route path={routes.path} element={routes.element()} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
