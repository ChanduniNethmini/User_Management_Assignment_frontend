import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../App'

export default function Profile() {
  const [mypics, setPics] = useState([])
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:5000/mypost', {
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      setPics(result.mypost)
    })
  },[])
  return (
    <div style={{maxWidth:'550px', margin:'0px auto', textAlign:'center'}}>
     <hr/>
     <h4>My Profile</h4>
    <div className='row'>
      <div className='col'>
      <div style={{display:'flex', 
      justifyContent:"space-around", 
      margin:'18px 0px',
      padding: '20px',
  textAlign:'center'
      }}>
        <div>
          <img style={{width:'100px', height:'100px', borderRadius:'80px', marginRight:'50%'}}
          src={state?state.pic:"loading"}/>
        </div>
      </div>
      </div>
    <div className='col'>
    <h5>Welcome back {state?state.name:"loading"}</h5>
        <div style={{display:'flex',  justifyContent:"space-between", width:'108%',  padding: '20px'}}>
     <h5>{state?state.email:"loading"}</h5>
        <div style={{display:'flex',  justifyContent:"space-between", width:'108%',  padding: '20px',
  textAlign:'center'}}></div>
        

        </div>
      </div>
    </div>
    <hr/>
    <div className='gallery'>
      {
        mypics.map(item=>{
          return(
          <img key={item._id} className='item' src={item.photo} alt={item.title}/>  
          )
        })
      }
    </div>
    </div>
      
    
  )
}
