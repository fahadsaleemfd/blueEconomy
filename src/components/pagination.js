import React from "react"
import { withPrefix ,Link } from "gatsby"
import  "../components/pagination.css"


const Pagination = ({prevPage,nextPage,isFirst, isLast, currentPage, numPages,path}) => {

                console.log(path)

                const disableButtonFirst =  !isFirst ? "" : "disabled_link"
                const disableButtonLast =  !isLast ? "" : "disabled_link "

        return (  

             <div class="row">
                        <div class="col-12">
                            <nav>

                            <ul class="pagination justify-content-center">
                                    {/* {!isFirst &&  (  <i class="fas fa-angle-left" disabled></i> )} */}
                                            <li class="page-item">
                                        
                                               <Link className={` page-link ${disableButtonFirst}`} to={path+prevPage}>
                                                            <i class="fas fa-angle-left"></i>
                                                </Link>
                                                
                                            </li>
                                     
                                    <li class="page-item"><a class="page-link" href="#">{currentPage}/{numPages}</a></li>
                                    {/* {!isLast && ( */}
                                        <li class="page-item">
                                            <Link className={` page-link ${disableButtonLast}`} to={path + nextPage}>
                                                <i class="fas fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    {/* )} */}

                                </ul>
                                        
                            </nav>
                        </div>
                    </div> 






        
        )
  
                                    }

  
  
export default Pagination