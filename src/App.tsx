import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components/layout";
function App() {
  return (
    <>
      <BaseLayout>
        <Router>
          <Routes></Routes>
        </Router>
      </BaseLayout>
    </>
  );
}

export default App;
