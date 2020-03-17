import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/scss/index.scss';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Russian Version
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Ksu from './components/tours/ksu/Ksu';
import Bpk from './components/tours/bpk/Bpk';
import Avk from './components/tours/avk/Avk';
import Mv from './components/tours/mv/Mv';
import Patagonia from './components/tours/patagonia/Patagonia';
import Bfk from './components/tours/bfk/Bfk';
import Ocean from './components/tours/ocean/Ocean';
import Baken from './components/tours/baken/Baken';
import Ko from './components/tours/ko/Ko';
// English Version
import HomeEng from './components/eng/layout/Home';
import AboutEng from './components/eng/layout/About';
import KsuEng from './components/eng/tours/ksu/KsuEng';
import BpkEng from './components/eng/tours/bpk/BpkEng';
import AvkEng from './components/eng/tours/avk/AvkEng';
import MvEng from './components/eng/tours/mv/MvEng';
import PatagoniaEng from './components/eng/tours/patagonia/PatagoniaEng';
import BfkEng from './components/eng/tours/bfk/BfkEng';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/ksu" component={Ksu} />
          <Route exact path="/bpk" component={Bpk} />
          <Route exact path="/avk" component={Avk} />
          <Route exact path="/mv" component={Mv} />
          <Route exact path="/patagonia" component={Patagonia} />
          <Route exact path="/bfk" component={Bfk} />
          <Route exact path="/ocean" component={Ocean} />
          <Route exact path="/baken" component={Baken} />
          <Route exact path="/ko" component={Ko} />
          {/* English Version */}
          <Route exact path="/eng" component={HomeEng} />
          <Route exact path="/eng/about" component={AboutEng} />
          <Route exact path="/eng/ksu" component={KsuEng} />
          <Route exact path="/eng/bpk" component={BpkEng} />
          <Route exact path="/eng/avk" component={AvkEng} />
          <Route exact path="/eng/mv" component={MvEng} />
          <Route exact path="/eng/patagonia" component={PatagoniaEng} />
          <Route exact path="/eng/bfk" component={BfkEng} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
