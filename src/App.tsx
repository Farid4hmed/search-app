import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home/Home";
import { Result } from "./pages/Result/Result"

function App() {
  return (
    <Routes>
      <Route path="/result" element={<Home />}/>
      <Route path="/" element = { <Result /> } />
    </Routes>
  );
}

export default App;
