import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {IonLoading,} from '@ionic/react'
import {Card,} from  'react-bootstrap'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom'

function ImageProduitButique({produit,islog,handlecart,handleconnexion}) {
  

  return (
    <div>
     
    <Card.Img src={`http://127.0.0.1:8001${produit.thumnail}`} alt="" className="imgboutiquemobile" />
    <Link className='linkpanier'  to={`/detail/${produit.slug}/${produit.nom}`}>
   <Card.Title className='centerbtn'>{produit.nom}</Card.Title>
   </Link>  
    </div>
  )
}

export default ImageProduitButique