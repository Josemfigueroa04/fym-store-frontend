import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SliderImagenes = () => {

const images = [
    {
        original:'/public/img/cajas.jpg'
    },
    {
        original: '/public/img/escritorios.jpg'
    },
    {
        original: '/public/img/terra.jpg'
    },
    {
        original: '/public/img/silla-escritorio.jpg'
    },
    {
        original: '/public/img/rack-blanco.jpg'
    },
    
   
    {
        original: '/public/img/descuento.jpg'
    },
    {
        original: '/public/img/logo-fym.png'
    },


];

return (
    <div style={{width:"30vw", margin:'auto'}}>
        <ImageGallery  items={images}  
        autoPlay={true}
        showBullets={true}
        slideInterval={3000}
        showFullscreenButton={false}

        />
    </div>
)
}

export default SliderImagenes;
