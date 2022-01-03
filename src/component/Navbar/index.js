import "./css/index.css"
// import LOGO from "../../assets/logo.svg"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>



const Navbar = () => {
  return (
  
  
  
    
      <Container className=" mt-20">
        <Grid Container >
          <Grid item xs={12} lg={6} md={12}  >
         
      <nav className="navbar navbar-light" style={{position:"relative",bottom:"10px",justifyContent:"space-around"}}>
        <div className="container-fluid">
          <a className="navbar-brand"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"/></a>
          <a className="navbar-brand"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" /> <span style={{fontSize:"14px",fontWeight:"bold" ,heigth:"12px"}}>Deliver to <br/>Dubai</span> </a>
          <form className="d-flex">
            <input style={{width:"400px"}} className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
          </form>
          <a style={{fontSize:"15px"}} className="navbar-brand">العربية</a>
          <a className="navbar-brand"><spn>Sign in</spn><img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"/></a>
          <a className="navbar-brand"><spn>Cart</spn><img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg"/></a>
        </div>

    
      </nav>
              
          </Grid>
        </Grid>
      </Container>
    
  )
}
export default Navbar