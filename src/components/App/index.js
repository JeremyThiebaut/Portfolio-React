import "./style.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useParams,
  // Redirect,
  // Link
} from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../Home";

// import PropTypes from "prop-types";

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
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

// Démo

// const ParamsAdress = () => {
//   const { slug } = useParams();
//   return <Home slug={slug} />;
// };

// App.propTypes = {

// }

export default App;
