import "./modal.css"
import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { authentication } from "../../firebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { toggleLogin, toggleModal, addEmail, loginOrRegister } from "./modalSlice.js"


const Modal = () => {
  
  const toggle = useSelector((state) => state.toggle.value)
  const isLoggedIn = useSelector((state) => state.toggle.isLogged)
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const handleSubmit = (event) => {

    onAuthStateChanged(authentication, (user) => {
      if (user) {
        const uid = user.uid;

        console.log(uid);
      } else {

        // ...
      }
    });

    if (isLoggedIn) {
      signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(toggleLogin())

        dispatch(addEmail(user.email))
        dispatch(loginOrRegister("Login"))
        return
      })
      .catch((error) => {
        const errorCode = error.code;
        
      });
    } else {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(toggleModal())

            dispatch(addEmail(user.email))
            dispatch(loginOrRegister("Register"))
            return
          })
          .catch((error) => {
            const errorCode = error.code;
    
            if (errorCode === "auth/email-already-in-use") {
              console.log("Sorry, that email is taken.")
            } else {

            }
            
          });
    }

    event.preventDefault();
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLoginState = (e) => {
    dispatch(toggleLogin())
    dispatch(toggleModal())
  }


  return (
    <>
    {
    toggle || isLoggedIn ? 
    <style>
      {
        `.App {
          background-color: rgb(220,220,220) !important;
        }
        
        .scroll-gallery {
          display: none;
        }

        button {
          display: none;
        }
        `
      }
    </style>
    : ""
    }

    {toggle || isLoggedIn ? 
    <>
      <div className="Register"> 
        <h2 className="register">{isLoggedIn ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="email-pass-wrapper">
            <label> 
              <p>* Email:</p>
              <input type="email" name="email" value={email} placeholder="example@example.com" onChange={handleEmailChange} required/>
            </label>
            
            <label> 
              <p>* Password:</p>
              <input type="password" name="password" minLength="3" value={password} onChange={handlePasswordChange} required/>
            </label>
          </div>

          <input className="submit loader" type="submit" value={isLoggedIn ? "Login" : "Register"}/>
        </form>
      </div>
      
      {
        isLoggedIn ?
          ""
        : <div className="try-loggin">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        Already have an account? {isLoggedIn ?  "" : <a href="#" onClick={handleLoginState}> Login!</a>}
      </div>
      }
    </>
    : ""}


    </>
  )
}

export default Modal