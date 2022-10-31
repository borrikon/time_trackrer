import DaysList from "./components/DaysList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import AddDay from "./components/AddDay";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<DaysList />} />
        <Route path="addDay" element={<AddDay />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
