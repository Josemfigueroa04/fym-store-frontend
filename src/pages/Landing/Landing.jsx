import SliderImagenes from "../../components/SliderImagenes/SliderImagenes.jsx";
// import CarouselImg  from "../../components/SliderImagenes/CarouselImg.jsx";
import RegistroSencillo from "../../components/Register/registrosencillo.jsx";
import FormularioProduc from "../../components/FormulariaoProduc/FormularioProduc.jsx";

const Landing = () => {
    return (
        <div className=" ">
        <FormularioProduc/>
        <RegistroSencillo/>
        <SliderImagenes/>
        

        {/* <CarouselImg/> */}
        </div>
    );
    }

export default Landing;