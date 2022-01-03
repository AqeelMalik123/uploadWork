import "./css/index.css"
import cardbar from "../../assets/maincard/card1.png"
const HeaderCard=()=>{
    return(
      <div className="cd_main">
        <div className="container  ">
        <div className="row">
          <div className="col"><img className="cd-12"  src={cardbar} /></div>
          <div className="col"><img className="cd-12" src={cardbar}/></div>
          <div className="col"><img className="cd-12" src={cardbar}/></div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img className="cd-12" src={cardbar} /> </div>
          <div className="col"> <img  className="cd-12"   src={cardbar} /> </div>
        </div>
      </div>
      </div>
    )
}
export default HeaderCard;