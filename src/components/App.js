import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {


  return (
    <div className="page">
      {/* <!-- start header --> */}
      <Header />
      {/* <!-- end header --> */}
      {/* main */}
      <Main />
      {/* end main */}
      {/* <!-- start footer --> */}
      <Footer />
      {/* <!-- end footer -->*/}
    </div>
  );
}

export default App;
