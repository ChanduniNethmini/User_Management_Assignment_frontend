import React,{useEffect, createContext, useReducer, useContext} from "react";
import './App.css';
import { BrowserRouter, Route, Routes,useNavigate  } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Signup from "./components/pages/Signup";
import Login from './components/pages/Signin';
import Profile from "./components/pages/Profile";
import {initialState, reducer} from '../src/reducers/userReducer';

export const UserContext = createContext()

const Routing =()=>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))

    if(user){
      dispatch({type:"USER", payload:user})
 
    }else{
      navigate('/signin')
    }
  },[])
  return(
<Routes>
       
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
  ) 
 
  
}
function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
       <Routing/>
      </BrowserRouter>
      </UserContext.Provider>
      
    </div>
  );

}

export default App;
