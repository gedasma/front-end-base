import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Pagination = (props)=>{
    const [pageArray, setPageArray] = useState()
    useEffect(()=>{
        if(!pageArray){
            setPageArray(Array.from({ length: props.pageAmount }, (_, index) => index + 1))
        }
    }, [pageArray])

return (
    <div className="overflow-x-auto">
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item">
                    <Link className={props.currentPage == 1? "page-link disabled" : "page-link"} to={`/${props.linkWord}/${parseInt(props.currentPage) - 1}`}>Previous</Link>
                </li>
                    {pageArray?
                    pageArray.map((pageNumber)=>
                        <li key={pageNumber} className={props.currentPage == pageNumber? "page-item active" : "page-item"}><Link className="page-link" to={`/${props.linkWord}/${pageNumber}`}>{pageNumber}</Link></li>
                        )
                    :
                    <></>
                    }
                <li className="page-item">
                    <Link className={pageArray && props.currentPage == pageArray.length? "page-link disabled" : "page-link"} to={`/${props.linkWord}/${parseInt(props.currentPage) + 1}`}>Next</Link>
                </li>             
            </ul>
        </nav>
        </div>

)}

export default Pagination