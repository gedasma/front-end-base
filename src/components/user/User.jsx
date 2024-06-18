import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { checkLoginStatus } from "../../services/userService"
import { AppContext } from "../../context/AppContext"
import { useContext } from "react"

const User = ()=>{
    const [userData, setUserData] = useState()
    const navigate = useNavigate();
    const {authToken, removeAuthToken} = useContext(AppContext);


    useEffect(()=>{
        if(authToken)
        {
            checkLoginStatus(authToken).then(data => setUserData(data.data))
            // console.log(userData)
        }
    }, [authToken])

    const handleLogout = () =>{
        // logoutUser(authToken)
        removeAuthToken()
        setUserData('')
    }

    return(
        <>
        {
        userData?
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {userData.name}
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/userproducts/1">My Products</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Log out</button></li>
                </ul>
            </li>
        :
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
        }
        </>
    )
}

export default User