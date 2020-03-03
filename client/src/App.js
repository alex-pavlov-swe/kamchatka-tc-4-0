import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/scss/index.scss';
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
// English Version
import HomeEng from './components/eng/layout/Home';
import KsuEng from './components/eng/tours/ksu/KsuEng';
import BfkEng from './components/eng/tours/bfk/BfkEng';

function App() {
  return (
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
        {/* English Version */}
        <Route exact path="/eng" component={HomeEng} />
        <Route exact path="/eng/ksu" component={KsuEng} />
        <Route exact path="/eng/bfk" component={BfkEng} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
