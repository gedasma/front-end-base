import { Link } from "react-router-dom"

const ProductListItem = (props)=>{
return (

<div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={props.productData.image_url} alt="No product image" />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{props.productData.title}</h5>
                            {props.productData.price} &euro;
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/product/${props.productData.id}`}>View options</Link></div>
                    </div>
                </div>
            </div>
)}

export default ProductListItem