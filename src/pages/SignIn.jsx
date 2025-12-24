import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) =>{
           setEmail(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);

    }

    const handleSignInSubmit = (event) =>{
          event.preventDefault();
        //   console.log(email);
        //   console.log(password);
        if( email === "mokaddes.ru2000@gmail.com" && password === "123456"){
            const user = {
                name: ' Mokaddes Ali',
                email: "mokaddes.ru2000@gmail.com",
                city : "Rajshahi",
                country : "Bangladesh"
            }
            alert("Successfully sign in!");
            navigate("/profile", { state: user});
        }else{
            alert(" Email or Password do not matched!")
            navigate('/signin');
        }
    }
  return (
    <>
    <div className="sign-in-form-section">
        <div className="sign-in-heading">
            <h1> Sign In </h1>
        </div>
        {/* sign In form wrapper */}
        <div className="sign-in-wrapper">
           <form onSubmit={ handleSignInSubmit} className='sign-in-form' action="" method="post">
            <input type="email" name="user_email" id="user_email" onChange={handleEmail} />

            <input type="password" name="user_password" id="user_password" onChange={handlePassword} />
            <button type="submit"> Sign In</button>

           </form>

        </div>
    </div>
    </>
  )
}

export default SignIn