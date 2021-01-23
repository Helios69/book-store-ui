import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesBar from "./components/CategoriesBar/CategoriesBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Topmenu from "./components/Topmenu/Topmenu";
import ProductPage from "./pages/ProductPage/ProductPage";
import { pages } from "./routes";

function App() {
  return (
    <div className="app">
      <Topmenu />
      <Header />
      <CategoriesBar /> 
      {/* <Switch>
        {pages.map(({ component, path, exact }) => (
          <Route key={path} exact={exact} path={path}>
            {component}
          </Route>
        ))}
      </Switch> */}
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
