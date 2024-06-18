import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserProducts, deleteProduct } from "../../services/productService";
import AddProductForm from "../addProductForm/AddProductForm";
import Pagination from "../pagination/Pagination";
import { truncateText } from "../../helpers/truncateText";

function UserProducts() {

const [isFormOpen, setIsFormOpen] = useState()
const [userProducts, setUserProducts] = useState()
const [productIdToUpdate, setProductIdToUpdate] = useState('')
const [updateRequest, setUpdateRequest] = useState('')

const {authToken} = useContext(AppContext);
const navigate = useNavigate();
const [showDisplayForm, setShowDisplayForm] = useState(false);
let {id} = useParams()

useEffect(()=>{
  if(!authToken){
    navigate('/login')
  }
}, [authToken])

useEffect(()=>{
  if(authToken){
     getUserProducts(authToken, id).then(data=>setUserProducts(data))
    
  }
}, [id, updateRequest])

  const handleCreateProduct = () =>{
    setProductIdToUpdate('')
    setShowDisplayForm(true);
  }

  const handleUpdateProduct = (productId) =>{
    setProductIdToUpdate(productId)
    setShowDisplayForm(true);

  }

  const requestUpdate = () =>{
    console.log("request happened")
    setUpdateRequest(!updateRequest)
  }

  const handleDeleteProduct = (productId) =>{
    deleteProduct(authToken, productId).then(getUserProducts(authToken, id).then(data=>setUserProducts(data)))
    requestUpdate()
  }

  const handleCloseDisplayForm = () => {
      setShowDisplayForm(false);
  };

return (
  <div className="container-fluid">
    <AddProductForm show={showDisplayForm} handleClose={handleCloseDisplayForm} authToken={authToken} productIdToUpdate={productIdToUpdate} requestUpdate ={requestUpdate}/>
  <div className="mt-3 ml-3">
    <button type="button" className="btn btn-primary" onClick={handleCreateProduct}>Add Product</button>
  </div>
  <div className="overflow-x-auto">
  <table className="table mt-3">
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      {userProducts? 
        userProducts.data.data.map((productData)=>
        <tr key={productData.id}>
          <td>{productData.id}</td>
          <td>{productData.title}</td>
          <td>{truncateText(productData.description, 10)}</td>
          <td>{productData.price} &euro;</td>
          <td><button onClick={() => {handleUpdateProduct(productData.id)}}>Update</button></td>
          <td><button onClick={() => {handleDeleteProduct(productData.id)}}>Delete</button></td>
        </tr>)
        :
        <tr><td><div>Loading...</div></td></tr>
      }
    </tbody>
  </table>
  </div>
  {userProducts? 
    <Pagination pageAmount = {userProducts.data.last_page} currentPage = {id} linkWord = {'userproducts'}/>
    :
    <div>Loading...</div>
  }
  </div>
  
);
}

export default UserProducts;
