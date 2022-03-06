import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Card,Button} from  'react-bootstrap'
import Image from 'react-bootstrap/Image'
import {  useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Box, } from "@material-ui/core";
import {toast} from 'react-toastify'
import { Fragment } from 'react';
import { IonGrid,IonRow,IonCol,IonIcon,IonPopover,IonLoading,IonText,IonSearchbar} from '@ionic/react'
import { ellipsisHorizontalOutline,} from 'ionicons/icons'


const style = makeStyles({
  titleItemRight: {
  
    top: "50%",
    float: "right",
    position: "relative",
    transform: "translateY(-50%)"
  }
});

function BoutiqueVueStaff(props) {
    const classes = style();
    let slug=props.match.params.slug
    const  [produit, setproduit] = useState([])
    const  [profil, setprofil] = useState([])
    const  [actif, setactif] = useState(false)
    const  [load, setload] = useState(false)
    const  [pop, setpop] = useState(false)
    const handlebadge=props.handlebadge
    const [showLoading, setShowLoading] = useState(true);
    const history=useHistory()
    const  [isStaf, setisStaf] = useState(false)
    const  [data, setData] = React.useState({
        search:''
      })
         const gosearch=e=>{
    
        history.push({
          pathname:`/rechercheproduit/${data.search}`,
          
    
        });
      
    
      }
      const handlepop=()=>{
        setpop(true)
    }
    const notify = () => toast.success("Vendeur desactivé  ",
    {
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    useEffect(()=>{
      axiosInstance
      .post('produit/boutiquevendeur/',{slug:slug})
      .then(res=>{
         // console.log(res.data.items)
          setproduit(res.data.items)
          setprofil(res.data.profil)
          setload(true)
      })

    },[slug])
    useEffect(()=>{
     axiosInstance
     .get('staff/staf/')
     .then(res=>{
       setisStaf(res.data)
     })
    },[])
  

      useEffect(()=>{
        axiosInstance
        .post('produit/actifvendeur/',{slug:slug})
        .then(res=>{
           // console.log(res.data)
            setactif(res.data)
        })
  
      },[slug])
    
      const handledesactif=()=>{
          axiosInstance
          .post('staff/desactivationvendeur/',{slug})
          .then(()=>{
             // history.push('/accueil')
              notify()
              setpop(false)
          })
      }

    return (
        <div >
            {isStaf?
            <Fragment>
            {load?
            <div className='container'>
            <Box className={classes.titleBar}>
                <h3>Informations sur le vendeur:</h3>
                <p> Numero de telephone:{profil.user.phone}</p>
                <p>Prenom et Nom: {profil.user.prenom} {profil.user.nom} </p>
          <IonText className="ion-float-end">
            <button style={{background:'none',border:'none'}} onClick={handlepop}>
                <IonIcon icon={ellipsisHorizontalOutline} style={{zoom:3,marginTop:2}} color="danger"/>
                </button>
                </IonText>
                <IonSearchbar
            value={data.search}
            onIonChange={(newvalue)=>setData({search:newvalue})}
          //onRequestSearch={()=>gosearch(data.search)}
          placeholder='rechercher un produit '
          style={
              {
                  width:'50%'
              }
          }
                    />
            </Box>

     <Image  src={`http://127.0.0.1:8001${profil.logo}`} roundedCircle height='200' width='200'/><br/><br/>
        <p>{profil.description}</p>

        <div className=" row -3 m-3">
        
        {produit.map(pi=>
          
          <div className="col-md-3 mt-1 ">
         
          <Card style={{ width: '15rem' }}>
          <Card.Title style={{textAlign:'center'}}>{pi.nom}</Card.Title>
        
           <Card.Img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="img-fluid"  style={{objectFit: 'contain',height: '200px'}}/>
           <Card.Text className='mt-2' style={{textAlign:'center',color:'red'}}> {pi.prix} CFA</Card.Text> 
           </Card>
           </div>)}
           </div>
           <IonPopover
            cssClass='my-custom-class'
            isOpen={pop}
            onDidDismiss={() => setpop(false)}
          >
        <IonGrid>
          {actif?
            <IonRow>
             <IonCol size='12'>
             <button style={{background:'none',border:'none',color:'magenta'}}   >
             envoyer un avertissement a {profil.user.prenom} {profil.user.nom}
           </button>
        </IonCol>
        <IonCol size='12'>
        <Button style={{background:'none',border:'none',color:'red'}} onClick={handledesactif}  >
            Desactiver  {profil.user.prenom} {profil.user.nom}
           </Button>
        </IonCol>
            </IonRow>:<h1>Vendeur non actif!</h1>}
        </IonGrid>
        
      </IonPopover>
           </div>:<IonLoading
           cssClass='my-custom-class'
           isOpen={showLoading}
           onDidDismiss={() => setShowLoading(false)}
           message={'Chargement...'}
           duration={5000}
         />}


         
           </Fragment>:null}

          
        </div>
          
    )
}    

export default BoutiqueVueStaff

