import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ListNotes} />
        <Route path="/edit" exact component={MainArea} />
      </Switch>
    </Router>
  );
}

export default App;
