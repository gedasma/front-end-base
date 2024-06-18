// import { postRequest } from "../../services/userService";
import Login from "../login/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductList from "../productList/ProductList";
import Header from "../header/Header";
import UserProducts from "../userProducts/UserProducts";
import ProductPage from "../productPage/ProductPage";
import Register from "../register/Register";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/products/:id' element={<ProductList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/userProducts/:id' element={<UserProducts/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
