import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios';
import {IonLoading,} from '@ionic/react'
import ResultatSearchDesk from '../Components/Desk/ResultatSearchDesk'
import ResultatSearchMobile from '../Components/Mobile/ResultatSearchMobile'

function ResultatRechercheProduit(props) {
    const search = 'produit/search'
    const  [load, setload] = useState(false)
	const [produit, setproduit] = useState([]);
    const  [user, setuser] = useState({})
    const [showLoading, setShowLoading] = useState(true)
  

	useEffect(() => {
		getresult()
    },[])
    const getresult=()=>{
        axiosInstance
        .get(search + '/' + window.location.search)
        .then((res) => {
            //const allPosts = res.data;
            setproduit(res.data);
            setload(true)
            console.log(res.data);
        });
    }
     
    return (
        <div>
        {load?
        <div>
         { produit.length>0 ?
        <>
          <ResultatSearchDesk produit={produit}/>
          <ResultatSearchMobile produit={produit}/>
        </>
         :<h2 className='centerbtn'>Oups aucun resultat pour cette recherche.</h2>}
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

export default ResultatRechercheProduit;


