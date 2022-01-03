import slide from "../../assets/carouselimage/slide.png"
import slide1 from "../../assets/carouselimage/slide1.jpg"
import slide2 from "../../assets/carouselimage/slide2.jpg"
import slide3 from "../../assets/carouselimage/slide3.png"
import slide4 from "../../assets/carouselimage/slide4.gif"
import slide6 from "../../assets/carouselimage/slide6.jpg"
const MainSlider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={5} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>


          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slide4} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={slide6} className="d-block w-100" alt="..." />
          </div>





        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default MainSlider;