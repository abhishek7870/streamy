import StreamCreate from "./component/stream/StreamCreate";
import StreamEdit from "./component/stream/StreamEdit";
import StreamDelete from "./component/stream/StreamDelete";
import StreamShow from "./component/stream/StreamShow";
import StreamList from "./component/stream/StreamList";
import Header from './component/Header';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
         <div>
             <Header />
             <Switch>
             <Route path="/" exact component={StreamList} />
             <Route path="/stream/:id"  component={StreamShow} />
             <Route path="/stream/delete/:id" exact component={StreamDelete} />
             <Route path="/stream/edit/:id" exact component={StreamEdit} />
             <Route path="/stream/new" exact component={StreamCreate} />
             </Switch> 
         </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
