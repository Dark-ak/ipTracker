import React, { useContext, useState } from 'react'
import api from '../utilities/api'
import { MyContext } from '../utilities/context'

const Search = () => {
    const [ip, setIp] = useState("")
    const [error, setError] = useState()
    const { setIpData, setLocation } = useContext(MyContext)

    const ValidateIPaddress = (ipaddress) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return (true)
        }
        return false
    }

    const handleSearch = async () => {
        if (!ip) {
            setError("Fill the Field")
        }

        else if (!ValidateIPaddress(ip)) {
            setError("Invalid IP address")
        }

        else {
            await api.search(ip).then(response => {
                setIpData(response)
                setLocation(response.location)
            })
        }
    }
    return (
        <div className='flex flex-col justify-center pt-5  items-center gap-3'>
            <p className='text-white font-medium text-lg md:text-2xl'>IP Address Tracker</p>
            <div className='flex flex-col cursor-pointer'>
                {error && <p className='text-red text-xs '>{error}</p>}
                <div className='flex'>
                    <input type="text" className='text-sm focus:outline-none rounded-l-lg md:px-5 md:py-2 w-[200px] px-3 md:w-[25rem]' onChange={() => setIp(event.target.value)} />
                    <div className='bg-darkGray h-full w-10 rounded-r-lg flex items-center justify-center p-[0.7rem]' onClick={handleSearch}>
                        <img src="/src/assets/icon-arrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search