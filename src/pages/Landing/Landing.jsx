import SliderImagenes from "../../components/SliderImagenes/SliderImagenes.jsx";
// import CarouselImg  from "../../components/SliderImagenes/CarouselImg.jsx";
import RegistroSencillo from "../../components/Register/registrosencillo.jsx";

const Landing = () => {
    return (
        <div className=" ">
        <RegistroSencillo/>
        <SliderImagenes/>
        

        {/* <CarouselImg/> */}
        </div>
    );
    }

export default Landing;