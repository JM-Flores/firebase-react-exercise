import { useState } from "react";
import "../App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function SignUp() {
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
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((res) => {
            console.log(res.user);
          })
          .catch((err) => {
            alert(err.message);
          });
      };
      return (
        <>
          <header>Sign Up</header>
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
          <button onClick={handleSubmit}>Sign Up</button>
        </>
      );
}

export default SignUp