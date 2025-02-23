import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-200 mt-5 rounded-xl p-5 mb-5 text-blue-600 text-2xl'>User: {userid}</div>
  )
}

export default User