import ProductListItem from "../productListItem/ProductListItem"
import { getProductPage } from "../../services/productService"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Pagination from "../pagination/Pagination"

const ProductList = ()=>{
    let {id} = useParams()

    const [pageData, setPageData] = useState()
    

    if(!id){
        id = 1
    }
    
    

    useEffect(()=>{
        getProductPage(id).then(data=>setPageData(data))
    }, [id])
    
    return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {pageData? 
                pageData.data.data.map((productData)=>
                    <ProductListItem key = {productData.id} productData = {productData}/>
                )
                :
                <div>Loading...</div>
            }
        </div>
        {pageData?
        <Pagination pageAmount = {pageData.data.last_page} currentPage = {id} linkWord = {'products'}/>
        :
        <div>Loading...</div>
        }
        
    </div>
</section>

    )
}

export default ProductList