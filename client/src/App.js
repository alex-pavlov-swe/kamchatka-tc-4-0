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
import Avk from './components/tours/avk/Avk';
import Patagonia from './components/tours/patagonia/Patagonia';
// English Version
import HomeEng from './components/eng/layout/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/ksu" component={Ksu} />
        <Route exact path="/avk" component={Avk} />
        <Route exact path="/patagonia" component={Patagonia} />
        {/* English Version */}
        <Route exact path="/eng" component={HomeEng} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
