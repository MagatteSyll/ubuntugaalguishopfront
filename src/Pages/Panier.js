import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios'
import { makeStyles } from "@material-ui/core/styles";
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useHistory } from 'react-router';
import {IonLoading, IonModal,} from '@ionic/react'
import PanierDesk from '../Components/Desk/PanierDesk'
import PanierMobile from '../Components/Mobile/PanierMobile'






function Panier({handlebadge,truncateString}) {
    const history=useHistory()
    const [showLoading, setShowLoading] = useState(true);
    const  [loaded, setloaded] = useState(false)
    const  [cart, setcart] = useState([])
  const  [modal, setmodal] = useState(false)
    const  [cartproduit, setcartproduit] = useState([])

    useEffect(()=>{
        handlecart()
        
    },[])
    const handlecart=()=>{
        axiosInstance
        .get('produit/getcart/')
        .then(res=>{
            console.log(res.data)
            setcart(res.data)
            setcartproduit(res.data)
            setloaded(true)  })
            

    }

    const handleminus= pk=>{
        axiosInstance
        .put(`produit/cartmanage/mycart/remove/${pk}/`)
        .then(()=>{
        handlecart()
        handlebadge()
        });
        
        
      }

     const handleplunique=slug=>{
         axiosInstance
        .post('produit/addcart/',{slug:slug})
        .then(res=>{
          handlecart()
          handlebadge()
         
        })
      .catch(()=>{
        return;
      })
     }
      const handleplus=(slug,id)=>{
        axiosInstance
        .post('produit/addcart/',{prodimg:id,slug:slug})
        .then(res=>{
          handlecart()
          handlebadge()
         
        })
      .catch(()=>{
        return;
      })
        
      }
      const handleremove=pk=>{
        axiosInstance
        .put(`produit/cartmanage/mycart/removesingle/${pk}/`)
        .then(()=>{
          handlecart()
          handlebadge()
        })
      }
      const handlehemoveAll=()=>{
        axiosInstance
        .put('produit/cartmanage/mycart/removeall/')
        .then(()=>{
          handlecart()
          handlebadge()
        })
      }
     
  
  const handlecommande=(id,nom,slug)=>{
    history.push(`/commande/${slug}/${id}/${nom}`)
  }
 
      

    return (
      <div >
        {loaded?
        <div>
        <PanierDesk cartproduit={cartproduit} handleplus={handleplus}
        handleplunique={handleplunique} handleminus={handleminus}
         handleremove={handleremove} truncateString={truncateString} cart={cart} handlecommande={handlecommande} />
        <PanierMobile cartproduit={cartproduit} handleplus={handleplus}
        handleremove={handleremove} handleminus={handleminus} truncateString={truncateString} cart={cart}
        handlecommande={handlecommande} handleplunique={handleplunique}  />
        </div>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
       </div>

     
   
       
    )
}

export default Panier


      