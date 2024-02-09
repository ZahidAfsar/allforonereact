import './App.css';
import HomePageComponents from './components/HomePageComponents';
import AddingPageComponents from './components/AddingPageComponents';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SayHelloPageComponents from './components/SayHelloPageComponents';
import ComparePageComponents from './components/ComparePageComponents';
import AskQuestionPageComponents from './components/AskQuestionPageComponents';
import MadlibPageComponents from './components/MadlibPageComponents';
import OddEvenPageComponents from './components/OddEvenPageComponents';
import ReversedIntPageComponents from './components/ReversedIntPageComponents';
import ReversedStringPageComponents from './components/ReversedStringPageComponents';
import EightBallPageComponents from './components/EightBallPageComponents';
import RestaurantPageComponents from './components/RestaurantPageComponents';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePageComponents/>}/>
      <Route path='AddingPage'element={<AddingPageComponents/>}/>
      <Route path='SayHelloPage'element={<SayHelloPageComponents/>}/>
      <Route path='ComparePage'element={<ComparePageComponents/>}/>
      <Route path='AskingQuestionPage'element={<AskQuestionPageComponents/>}/>
      <Route path='MadlibPage'element={<MadlibPageComponents/>}/>
      <Route path='OddEvenPage'element={<OddEvenPageComponents/>}/>
      <Route path='ReversedIntPage'element={<ReversedIntPageComponents/>}/>
      <Route path='ReversedStringPage'element={<ReversedStringPageComponents/>}/>
      <Route path='EightBallPage'element={<EightBallPageComponents/>}/>
      <Route path='RestaurantPage'element={<RestaurantPageComponents/>}/>
     </Routes>
     </BrowserRouter>

  );
}

export default App;
