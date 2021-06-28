import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { useState } from "react";
import './App.css';
import Login from "./Login";
import Orders from "./Orders";
import Logout from "./Logout";



function App() {
  const user = {
    "email" : "test@email.com",
    "password" : "1234567"
  }
  
  const [isRegistered, setIsRegistered] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const validUser = (username, password) => {
    console.log(isRegistered);
    if(username === user.email || password === user.password){
      setIsRegistered(true);
      setUserLoggedIn(true);
    }else{
      setUserNotFound(true);
    }
  }


  return (
    <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen">
      <div class="max-w-lg mx-auto flex flex-col">
        {/* Router */}
        <Router>
          <ul class="flex">
            <li class="mr-6">
              { userLoggedIn ? 
              <Link to="/logout">Logout</Link> :
              <Link to="/login">Login</Link> 
              }
            </li>
            <li class="mr-6">
              <Link to="/orders">Orders</Link> 
            </li>
          </ul>
        <Switch>
          <Route path="/login">
          {isRegistered ? <Orders/> :
            <>
            <Login user={user} validUser={validUser}/>
            <p
            class="text-white-500 text-xs italic"
            style={{ display: userNotFound ? "block" : "None" }}
          >
            Invalid Credentials
          </p>
            </>
          }
          </Route>
          <Route path="/orders">
            {isRegistered ?
            <Orders/> :
            <div class="my-40 text-white font-bold">Please Login</div>
            }
          </Route>
          <Route path="/logout">
          { userLoggedIn ?
            <Logout setIsRegistered={setIsRegistered} setUserLoggedIn={setUserLoggedIn} /> :
            <Login user={user} validUser={validUser}/>
          }
          </Route>
        </Switch>
        </Router>
        {/* isLoggedIn False */}
      </div>
    </div>
  );
}

export default App;
