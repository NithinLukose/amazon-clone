import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import Login from './containers/loginContainer'
import Header from './containers/headerContainer'
import Home from './components/Home'
import CheckOut from './containers/checkoutContainer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {auth} from './firebase/firebase'
import {setUser} from './actions'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser){
        dispatch(setUser(authUser))
      }
      else{
        dispatch(setUser(null))
      }
    })
  }, [])

  return(
    <Router>
      <div>
        
        
        
        <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <CheckOut />
          </Route>
          <Route path='/'>
            <Header />  
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
