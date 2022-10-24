import "./style.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useParams,
  // Redirect,
} from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../Home";
import Contact from "../../container/Contact";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route index element={<Home />} />
          {/* <Route exact path="/admin">
            <Route index element={<Admin />} />
            <Route path=":userId" element={<Page />} />
          </Route> */}
          <Route path="contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
