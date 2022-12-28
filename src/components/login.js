import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loggedInContext } from "../App";
import "./login.css"

export default function Login() {
  const navigate = useNavigate()  

  const {setIsLoggedIn} = useContext(loggedInContext)

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    if(details.email === "foo" && details.password === "bar"){
        setIsLoggedIn(true)
        navigate("/home")
    }
  }

  useEffect(() => {
    setIsLoggedIn(false)
  },[])

  return (
    <div className="cont">
      <div className="login-form">
        <h2>Member Login</h2>
        <form>
          <input
            type="email"
            name="email"
            className="in"
            placeholder="Username"
            value={details.email}
            onChange={inputHandler}
          />
          <div>
            <input
              type="password"
              name="password"
              className="in"
              placeholder="Password"
              value={details.password}
              onChange={inputHandler}
            />
          </div>
        </form>
        <button type="submit" className="subtn" onClick={submitHandler}>
          Login
        </button>
      </div>
    </div>
  );
}
