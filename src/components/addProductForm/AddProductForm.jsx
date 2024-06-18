import { Modal } from 'react-bootstrap';
import { useState, useEffect } from "react"
import { getProductById, uploadProduct, updateProduct } from '../../services/productService';
import { validateProductInput } from '../../helpers/InputValidation';

const AddProductForm = ({ show, handleClose, authToken, productIdToUpdate, requestUpdate}) => {

    const [formProductData, setFormProductData] = useState(
        {
            "title": '',
            "price": '',
            "image": '',
            "description": ''
        }
    )

    const handleChange = (event) =>{
        if (event.target.name === 'image') {
            setFormProductData({
                ...formProductData,
                [event.target.name]: event.target.files[0]//.name, // Use event.target.files for file inputs
                //"files": event.target.files[0]
            });
        }
        else{
            let { name, value } = event.target;
            setFormProductData({
            ...formProductData,
            [event.target.name]:value
        })
        }
        
    }

    useEffect(()=>{
        if(productIdToUpdate){
            getProductById(authToken, productIdToUpdate).then(data=>{
                let formData = {
                    "title": data.data.title,
                    "price": data.data.price,
                    "image": data.data.image_url,
                    "description": data.data.description
                }
                setFormProductData(formData)
            })
        }
        else{
            setFormProductData({
                "title": '',
                "price": '',
                "image": '',
                "description": ''
            })
        }
      }, [productIdToUpdate])

    const submitHandler = (e) => {
        e.preventDefault();
        if(productIdToUpdate){
            
            updateProduct(authToken, formProductData,productIdToUpdate).then(requestUpdate())
        }
        else{
            console.log("trying to upload with this body:")
            console.log(formProductData)
            uploadProduct(authToken, formProductData).then(requestUpdate())
        }
        
        handleClose()
    };

    useEffect(()=>{

    },[formProductData])

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = validateProductInput(formProductData)

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='overflow-auto'>{productIdToUpdate? "Update a product" : "Upload a product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-auto'>
            <form className='form' onSubmit={submitHandler}>
                <div className="mb-3">
                    <input name="title" id="title" className="form-control" placeholder="Product title" value={formProductData.title} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <input name="price" id="price" className="form-control" placeholder="Product price" value={formProductData.price} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    {formProductData.image?<img className='center' src={formProductData.image}></img>: <></>}
                    <input type='file' name="image" id="image" className="form-control" placeholder="Upload product image" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <input name="description" id="description" className="form-control" placeholder="Product description" value={formProductData.description} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    {isInputInvalid?
                        <p className="text-danger">{invalidInputMessage}</p>
                        :
                        <></>}
                    <button className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")} type="submit">{productIdToUpdate? "Update" : "Add Product"}</button>
                </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  };

export default AddProductForm