import { useState } from "react";
import { loginUser } from "../../services/userService";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = ()=>{
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const [errorMessages, setErrorMessages] = useState()
    const {setAuthToken, authToken} = useContext(AppContext);

    const handleChange = (event) =>{
        const { value } = event.target;
        setCredentials({
            ...credentials,
            [event.target.name]:value
        })
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
          const data = await loginUser(credentials);
      
          if (data.status === 'success') {
            setAuthToken(data.token);
            console.log(data.token);
          } else if (data.status === 'failed') {
            setErrorMessages(data.message);
          }
        } catch (error) {
          console.error('Error during login:', error);
          setErrorMessages(['An unexpected error occurred.']);
        }
        // loginUser(credentials).then(data=>data.status?setAuthToken(data.data.access_token):setErrorMessages({"message": data.message , "errors": data.errors}))
    }
    
    const navigate = useNavigate();
    useEffect(()=>{
      if(authToken) navigate('/products/1')
    },[authToken])

    return (
        <div className="container">

    <div className="row">
        <div className="col-md-4 offset-md-4">
        <form onSubmit={submitHandler} className="card text-center card  bg-default mb-3">
          <div className="card-header">
            LOGIN
          </div>
          <div className="card-body">
            <input onChange={handleChange} type="text" id="email" name="email" className="form-control input-sm chat-input" placeholder="Email" />
            <br />
            <input onChange={handleChange} type="password" id="password" name="password" className="form-control input-sm chat-input" placeholder="Password" />
          </div>
          <div className="card-footer text-muted">
            <button type="submit" className="btn btn-secondary">LOGIN</button>
            <br />
            <div className="mt-2">
            {errorMessages?
                <p className="text-start text-danger">{errorMessages}</p>     
              :<></>}
            </div>
            <div><Link to="/register">Register here</Link></div>
          </div>
          
        </form>
        
    </div>
    </div>
</div>
    )
}


export default Login