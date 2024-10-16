import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import DuplicatePromotionPage1 from "./components/DuplicationPromotionPage1/DupliactionPromotionPage1";
import DuplicationPage2 from "./components/DuplicationPage2/DuplicationPage2";
import LoaderPromotion from "./components/LoadingPromotion/LoadingPromotion";
import CongratulationProm from "./components/CongratulationsProm/CongratulationProm";
import DPInsert from './components/DPInsert/DPInsert';
import SummerPromotion from "./components/SummerPromotion/SummerPromotion";
import ButtonTikko from './components/ButtonTiko/ButtonTiko';
import ReviewProm from './components/ReviewProm/ReviewProm';
import TikkoWelcomePage from './components/TikkoWelcomePage/TikkoWelcomePage'

function App() {
  return (
    <Router>
      {/* <ButtonTikko /> */}
      <Routes>
        <Route path="/" element={<DuplicatePromotionPage1 />} />
        <Route path="/duplication-page-2" element={<DuplicationPage2 />} />
        <Route path="/loader-promotion" element={<LoaderPromotion />} />
        <Route path="/congratulation" element={<CongratulationProm />} />
        <Route path="/dp-insert" element={<DPInsert />} />
        <Route path="/btn-tikko" element={<ButtonTikko/>} />
        <Route path="/review-promotion" element={<ReviewProm/>} />
        <Route path="/summer-promotion" element={<SummerPromotion />} />
        <Route path="/welcome" element={<TikkoWelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
