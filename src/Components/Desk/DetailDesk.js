import {starOutline} from 'ionicons/icons'
import {IonCol,  IonRow,IonGrid, IonSegment, IonText, IonIcon, } from '@ionic/react'
import Image from 'react-bootstrap/Image'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Carousel from "react-multi-carousel";
import ProduitImageDisplay from './SousComponent/ProduitImageDisplay';




const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function DetailDesk({produit, islog, handlecart,user,handlenonlog,produitimage,handlecartunique}) {
  return( 
      <div className='desk detaildesk'>
       <ProduitImageDisplay produitimage={produitimage} produit={produit}
        user={user} islog={islog} handlecartunique={handlecartunique} handlecart={handlecart}/>
        </div>
       );
}


export default DetailDesk;

