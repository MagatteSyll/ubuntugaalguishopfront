import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import { IonLoading } from '@ionic/react';
import {useHistory} from 'react-router-dom'
import ProduitUneCategorieDesk from '../Components/Desk/ProduitUneCategorieDesk';
import ProduitUneCategorieMobile from '../Components/Mobile/ProduitUneCategorieMobile';


function ProduitSingleCategory(props) {
    const  [produit, setproduit] = useState([])
    const  [user, setuser] = useState({})
    const  [load, setload] = useState(false)
    const truncateString=props.truncateString
    let category=props.match.params.slug
    const handlebadge=props.handlebadge
    const [showLoading, setShowLoading] = useState(true);

    
    const isStaf=props.isStaf
   const  islog=props.islog
   const history=useHistory()
    
    useEffect(()=>{
        axiosInstance
        .get('utilisateur/getuser/')
        .then(res=>{
            setuser(res.data)
        })
    },[])
   
    useEffect(() => {
        axiosInstance
        .get('utilisateur/isauthenticated/')
        .then(res=>{
            //setislogged(res.data)
           // console.log(res.data)
        })
     }, [])

    useEffect(()=>{
        
      fetchdata() 

    },[])
    
    

    const fetchdata=()=>{
        axiosInstance
        .post('produit/produitpercategory/',{category:category})
        .then(res=>{
           // console.log(res.data)
            setproduit(res.data)
            setload(true)
         

        })

    }

    const  HandleAddCart = id =>{
        axiosInstance
      .post("produit/addcart/",{id})
       .then(res=>{
       // console.log(res.data)
       handlebadge()
     

        
        })
      .catch(err=>{
        return;
      })
    }

    
    const handlenonlog=()=>{
      history.push('/connexion')
    }
   
    const handledetail=(slug,nom)=>{
      history.push(`/detail/${slug}/${nom}`)
    }

    return (
        <div>
          {load?
        <div>
      <ProduitUneCategorieDesk isStaf={isStaf} islog={islog} HandleAddCart={HandleAddCart} 
      truncateString={truncateString} handlenonlog={handlenonlog} 
      load={load} user={user}
      fetchdata={fetchdata} produit={produit}  handledetail={handledetail}  />
      <ProduitUneCategorieMobile isStaf={isStaf} islog={islog} HandleAddCart={HandleAddCart} 
      truncateString={truncateString} handlenonlog={handlenonlog} 
      load={load} user={user}
      fetchdata={fetchdata} produit={produit}  handledetail={handledetail}  />
      </div>:
        <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
        />}
        </div>
        
    )
}

export default ProduitSingleCategory
