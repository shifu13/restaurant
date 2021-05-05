import "./Stylesheet/Stylesheet.scss";
import Navigation from "./Component/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./View/Homepage";
import Menu from "./View/Menu";
import Contact from "./View/Contact";
import Book from "./View/Book";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Book" exact component={Book} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
