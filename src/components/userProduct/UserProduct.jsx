import { Link } from "react-router-dom"
import { truncateText } from "../../helpers/truncateText"
import { updateProduct } from "../../services/productService"

const UserProduct = (props)=>{
return (

<tr>
    <td>{props.productData.id}</td>
    <td>{props.productData.title}</td>
    <td className>{truncateText(props.productData.description, 10)}</td>
    <td>{props.productData.price}</td>

</tr>
)}

export default UserProduct