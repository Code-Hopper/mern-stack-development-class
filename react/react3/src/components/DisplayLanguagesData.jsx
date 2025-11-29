import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { IoLogoJavascript, IoLogoPython } from "react-icons/io";

const DisplayLanguagesData = () => {

    let [techs, setTechs] = useState([])

    const fetchData = async () => {
        try {

            // fetch api

            let result = await axios({
                method: "GET",
                url: "http://localhost:5012/api/techs/all-languages",
            })

            console.log(result)

            if (result.status != 200) throw ("failed to get data")

            // if result is successfully
            // result.data.message
            // result.data.techs

            setTechs(result.data.techs)

        } catch (err) {
            // err.respnose.message
            console.log("error while fetching data from backend  : ", err)
        }
    }

    // useEffect(() => {
    //     fetchData()
    // })

    const displayTech = (tech, index) => {
        return (
            <div key={tech.id} className='tech p-2 border shadow min-w-[300px] h-[300px] rounded'>
                <ul className='flex flex-col gap-3'>
                    <li className='text-2xl font-bold'>{tech.name}</li>
                    <li className='bg-orange-200 p-2 rounded'>{tech.difficulty}</li>
                    <li className='bg-green-200 p-2 rounded'>{tech.duration}</li>
                    <span className='font-bold'>Used For :</span>
                    <li>
                        <ol className='ms-10 list-disc'>
                            {tech.scope.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </ol>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <div className='p-5 lg:p-20 flex flex-wrap gap-5 justify-center items-center'>
                {
                    techs.length == 0 ?
                        <button onClick={fetchData} className='bg-black px-3 py-1 rounded text-white'>Fetch Data</button>
                        :
                        techs.map(displayTech)
                }
            </div>
        </div>
    )
}

export { DisplayLanguagesData }
