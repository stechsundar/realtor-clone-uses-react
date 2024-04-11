import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate} from 'react-router'

export default function Header() {
  const [pageState, setPageState] = useState('Sign In')
  const location = useLocation()
  const navigate = useNavigate()
  const auth = getAuth()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setPageState("Profile")
      }else{
        setPageState("Sign In")
      }
    })
  }, [auth])

  function pathMatchRoute(route){
    if(route === location.pathname) {
      return true
    }
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" 
               className='h-5 cursor-pointer'
               onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li 
             className={`py-6 text-sm border-b-[3px] font-semibold 
             ${pathMatchRoute("/") ? "text-black border-b-red-500" 
                                   : "text-gray-500 border-b-transparent"} cursor-pointer`}  
                                   onClick={()=>navigate("/")}
            >Home</li>
            <li
             className={`py-6 text-sm border-b-[3px] font-semibold 
             ${pathMatchRoute("/offers") ? "text-black border-b-red-500" 
                                   : "text-gray-500 border-b-transparent"} cursor-pointer`}  
                                   onClick={()=>navigate("/offers")}
            >Offers            
            </li>
            <li
              className={`py-6 text-sm border-b-[3px] font-semibold 
              ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "text-black border-b-red-500" 
                                    : "text-gray-500 border-b-transparent"} cursor-pointer`}              
                                    onClick={()=>navigate("/profile")}>
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
