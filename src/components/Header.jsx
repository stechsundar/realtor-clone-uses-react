import React from 'react'
import { useLocation, useNavigate } from 'react-router'


export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname)

  function pathMatchRoute(route){
    if(route === location.pathname) {
      console.log(`Location: ${location.pathname}`)
      console.log(`Route: ${route}`)
      console.log(route === location.pathname)
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
              ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" 
                                    : "text-gray-500 border-b-transparent"} cursor-pointer`}              
                                    onClick={()=>navigate("/sign-in")}

            >Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
