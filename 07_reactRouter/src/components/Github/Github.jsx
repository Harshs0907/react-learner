import React, {useEffect, useState} from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
        const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className=' bg-gray-600 mt-4 mb-4 p-5 text-2xl text-orange-600 rounded-sm'>Github Followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}