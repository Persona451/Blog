import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
export default App;

// Декомпозиция - разделение кода компонента