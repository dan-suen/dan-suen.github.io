import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from './components/header/header';
import Email from './components/email/email';
function App() {
  return (
    <div className="App">
      <Header/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
