import { useState } from "react";
import "../App.css";
import { app, database } from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
      });
      const auth = getAuth();
      const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };
    
        setData({ ...data, ...inputs });
      };
    
      const handleSubmit = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((res) => {
            console.log(res.user);
          })
          .catch((err) => {
            alert(err.message);
          });
      };
  return (
    <>
        <header>Sign In</header>
        <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
        />
        <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
        />
        <button onClick={handleSubmit}>Sign In</button>
    </>
  )
}

export default SignIn