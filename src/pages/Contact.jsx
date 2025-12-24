import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate('/')
    }
  return (
    <>
    <button onClick={handleGoToHome}>Go to Home Page</button>
    </>
  )
}

export default Contact