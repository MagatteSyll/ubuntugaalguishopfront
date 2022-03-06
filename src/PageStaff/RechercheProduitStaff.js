import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import { Button,} from  'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import {IonLoading} from '@ionic/react'


function RechercheProduitStaff(props) {
    const  [produit, setproduit] = useState([])
    const  [load, setload] = useState(false)
    let id =props.match.params.id
    const history=useHistory()
    const [showLoading, setShowLoading] = useState(true);

    const notify = () => toast.success("produit supprimé !",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
    useEffect(()=>{
      axiosInstance
      .post('staff/rechercheproduit/',{'id':id})
      .then(res=>{
          setproduit(res.data)
          setload(true)
      })
    })
    const handledelete=id=>{
        axiosInstance
        .delete(`staff/actionproduit/supprimer/${id}/`)
        .then(()=>{
            history.push('/accueil')
            notify()
        })
    }
    return (
        <div>
         {load?
        <Fragment>
        <div className=" container row -3">

        <div className="col-md-6 ">
            
              <h3>{produit.nom}:{produit.prix} CFA</h3>
              <h4>Description du produit:</h4>
                 <p>{produit.description}</p>
                 <p >taille:{produit.size} </p>
                 <p  >couleur:{produit.color}</p>
                 <Button  variant='danger' onClick={()=>handledelete(produit.id)}>Supprimer le produit</Button>
                 </div>
                   
         <div className="col-md-6 mt-2 mb-2">
            
         <Carousel variant="dark">
     <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src={`http://127.0.0.1:8001${produit.thumbnail}`}
     alt='primo'
    /></Carousel.Item >
    <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src={`http://127.0.0.1:8001${produit.pic1}`}
      alt="Second slide"
    />  </Carousel.Item>
    <Carousel.Item style={{'height':"400px"}}>
    <img
      style={{'height':"400px"}}
      className="d-block w-100"
      src={`http://127.0.0.1:8001${produit.pic2}`}
      alt="Third slide"
    /></Carousel.Item>
     {produit.pic3 == null ? null:
     <Carousel.Item style={{'height':"400px"}}>
     <img
       style={{'height':"400px"}}
       className="d-block w-100"
       src={`http://127.0.0.1:8001${produit.pic3}`}
       alt="three"
     /></Carousel.Item>}
     
     {produit.pic4 == null ? null:
     <Carousel.Item style={{'height':"400px"}}>
     <img
       style={{'height':"400px"}}
       className="d-block w-100"
       src={`http://127.0.0.1:8001${produit.pic4}`}
       alt="Four"
     /></Carousel.Item >}
     {produit.pic5 == null ? null:
     <Carousel.Item style={{'height':"400px"}}>
     <img
       style={{'height':"400px"}}
       className="d-block w-100"
       src={`http://127.0.0.1:8001${produit.pic5}`}
       alt="five"
     /></Carousel.Item>}

     </Carousel>
         </div>
          
            </div>
             </Fragment>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
            </div>
    )
}

export default RechercheProduitStaff



