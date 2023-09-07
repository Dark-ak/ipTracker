import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import Map from './components/Map'
import { MyContext } from "./utilities/context"
import api from "./utilities/api"


const App = () => {
  const [ipData, setIpData] = useState([])
  const [location, setLocation] = useState([])

  useEffect(() => {
    api.initial().then(
      response => {
        setIpData(response)
        setLocation(response?.location)
      }
    )
  }, [])


  return (
    <MyContext.Provider value={{ ipData, setIpData, setLocation }}>
      <div className='flex flex-col justify-center font-rubik'>
        <div className='bg-phone w-full md:bg-pc bg-cover h-56'>
          <Search />
          <Results />
        </div>
        <div>
          <Map location={location} />
        </div>
        <div>

        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App