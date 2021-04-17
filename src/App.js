
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Body from './components/home/Content'
import AboutMe from './components/about/AboutPg'
import Footer from './components/footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Body} />
          <Route  path="/about" component={AboutMe} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
