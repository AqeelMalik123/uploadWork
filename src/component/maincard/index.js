import Cardf1 from "../../assets/card/cardf1.png"
import Cardf2 from  "../../assets/card/cardf2.png"
 
const MainCard=()=>{
    return(
        <div className="cardf">
            <div className="container">
        <div className="row">
          <div className="col">
        <img src={Cardf1} className="card-img-top" alt="..." />
        
           </div>
          <div className="col">
        <img src={Cardf2} className="card-img-top" alt="..." />
        
           </div>
          <div className="col">
        <img src={Cardf1} className="card-img-top" alt="..." />
        
          </div>
          <div className="col">
        <img src={Cardf2} className="card-img-top" alt="..." />
        
          </div>
        </div>
      </div>
        </div>
    )
}
export default MainCard