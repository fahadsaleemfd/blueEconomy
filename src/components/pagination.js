import React from "react"
import { withPrefix ,Link } from "gatsby"


const Pagination = ({prevPage,nextPage,isFirst, isLast, currentPage, numPages}) => {

    
 
        return (  

            // <div class="row">
            //             <div class="col-12">
            //                 <nav>

            //                 <ul class="pagination justify-content-center">
                                  
            //                                 <li class="page-item">
                                        
            //                                     <Link class="page-link">
            //                                                 <i class="fas fa-angle-left"></i>
            //                                     </Link>
                                                
            //                                 </li>
                                   
            //                         <li class="page-item"><a class="page-link" href="#">4</a></li>
                                   
            //                             <li class="page-item">
            //                                  <Link class="page-link"> 
            //                                     <i class="fas fa-angle-right"></i>
            //                                  </Link> 
            //                             </li>
                                   

            //                     </ul>
                                        
            //                 </nav>
            //             </div>
            //         </div> 


             <div class="row">
                        <div class="col-12">
                            <nav>

                            <ul class="pagination justify-content-center">
                                    {!isFirst && (
                                            <li class="page-item">
                                        
                                                <Link class="page-link" to={'/incubation/'+prevPage}>
                                                            <i class="fas fa-angle-left"></i>
                                                </Link>
                                                
                                            </li>
                                     )}
                                    <li class="page-item"><a class="page-link" href="#">{currentPage}/{numPages}</a></li>
                                    {!isLast && (
                                        <li class="page-item">
                                            <Link class="page-link" to={'/incubation/' + nextPage}>
                                                <i class="fas fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    )}

                                </ul>
                                        
                            </nav>
                        </div>
                    </div> 






        
        )
  
                                    }

  
  
export default Pagination