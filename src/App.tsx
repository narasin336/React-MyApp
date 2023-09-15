import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import KanbanCard from './components/KanbanCard';
import Accordion from './components/Accordion';
import Register from './components/Register';
import Subject from './components/Subject';
import Tabs from './components/Tabs'
// import MUIRichTextEditor from './components/Editor';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/KanbanCard">
          <KanbanCard />
        </Route>
        <Route path="/Accordion">
          <Accordion />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Subject">
          <Subject />
        </Route>
        <Route path="/Editor">
          {/* <MUIRichTextEditor /> */}
        </Route>
        <Route path="/Tabs">
          <Tabs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
