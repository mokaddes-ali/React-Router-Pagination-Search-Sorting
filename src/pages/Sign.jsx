import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Sign = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    

    const handleSubmit = (e) => {
        e.preventDefault() //  e=event the default form submission
        // console.log(email)
        // console.log(password)
        if (email === 'mokaddes.ru2000@gmail.com' && password === '123456'
        ) {
            alert('Login successful')
            navigate('/about')
        }
        else {
            alert('Login failed')
            navigate('/')
        }
    }
    

    const handleEmailChange = (even) => {
        setEmail(even.target.value)
    }
    const handlePasswordChange = (even) => {
        setPassword(even.target.value)
    }


  return (
    <>
    <h1>Sign In</h1>
    <form className="sign-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className="form-button">Sign In</button>
            </form>
    </>
  )
}

export default Sign