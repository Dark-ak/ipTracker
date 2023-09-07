import React, { useContext } from 'react'
import { MyContext } from "../utilities/context"


const Results = () => {

    const { ipData } = useContext(MyContext)

    const location = ipData.location

    return (
        <div className='relative text-xs w-[245px] top-6 left-[12%] md:left-[25%] z-50  bg-white p-5 md:top-10 rounded-lg md:w-[48%]'>
            <div className='flex flex-col items-center justify-center md:flex-row gap-4'>
                <div className='flex flex-col items-center justify-center md:border-r-[1px]  border-gray md:pr-10 md:inline'>
                    <p className='text-gray text-xs font-medium'>IP ADDRESS</p>
                    <p className='text-xl font-medium'>{ipData.ip}</p>
                </div>
                <div className='flex flex-col items-center md:border-r-[1px]  border-gray md:pr-10 md:inline'>
                    <p className='text-gray text-xs font-medium'>LOCATION</p>
                    <p className='text-xl font-medium'>{location?.city}</p>
                </div>
                <div className='flex flex-col items-center md:border-r-[1px]  border-gray md:pr-10 md:inline'>
                    <p className='text-gray text-xs font-medium'>TIMEZONE</p>
                    <p className='text-xl font-medium'>UTC {location?.timezone}</p>
                </div>
                <div className='flex flex-col items-center  md:pr-10 text-center md:inline'>
                    <p className='text-gray text-xs font-medium'>ISP</p>
                    <p className='text-xl font-medium'>{ipData.isp}</p>
                </div>
            </div>
        </div>
    )
}

export default Results