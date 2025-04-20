import { Route, Routes } from "react-router-dom";
import KidsSection from "./kids_page/KidsSection";

function App() {
  return (
    <Routes>
      <Route path="/kids" element={<KidsSection />} />
    </Routes>
  );
}

export default App;
