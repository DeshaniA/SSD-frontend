
import ReactDOM from 'react-dom';
import { Route, Switch} from  'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'
import Worker from './components/worker/AddText'
import WorkerView from './components/worker/viewText'
import Manager from './components/ManagerTask/AddFile'
import ManagerView from './components/ManagerTask/ViewFiles'

function App()  {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    
   
},[]);
  //routes
  return (
    <div className="App">
     
       <Switch>
         {/* <PrivateRoute path = "/" exact component ={ Home }/> */}
         
         
         <Route path = "/" exact component ={ Home }/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
         <Route path = "/viewtext" component ={ WorkerView }/>
         <Route path = "/viewfile" component ={ ManagerView }/>
         <PrivateRoute path = "/workerhome" exact component ={ Worker }/>
         <PrivateRoute path = "/managerhome" exact component ={ Manager }/>
        
        
       </Switch>
     
      
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
window.store = store;
//part12
ReactDOM.render(
   <Provider store = {store}>
     <Router>
    <React.StrictMode>
    <App />
   </React.StrictMode>
     </Router>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
export default App;

//console.log("dd");

