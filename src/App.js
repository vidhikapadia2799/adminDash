import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Service from "./Views/Service"
import Subservice from "./Views/Subservice"
import Order from "./Views/Order"
import Feedback from "./Views/Feedback"
import Customer from "./Views/Customer"
import Individualservice from "./Views/Individualservice"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Service} />
          <Route path="/subservice" component={Subservice} />
          <Route path="/order" component={Order} />
          <Route path="/customer" component={Customer} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/individualservice/:service_name" component={Individualservice}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
