import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }
  return (
    <>
    <button onClick={handleClick}>Go to About</button>
    </>
  )
}

export default Contact