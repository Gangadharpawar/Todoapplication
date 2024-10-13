import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Tab from "./component/Tab";
import { AuthoProvider } from "./Auth/AuthoProvider";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <AuthoProvider>
        <Router>
          <Navbar />
          {/* <Footer /> */}
        </Router>
        {/* <Tab></Tab> */}
      </AuthoProvider>
    </div>
  );
}

export default App;
