import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ChapterList from "./components/ChapterList";
import ShlokaList from "./components/ShlokaList";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ChapterList />} />
        <Route path="/chapter/:chapterId" element={<ShlokaList />} />
      </Routes>
    </Router>
  );
};

export default App;
