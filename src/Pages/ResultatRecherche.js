import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios';
import {Card} from  'react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link,} from 'react-router-dom';
import {toast} from 'react-toastify'
import Foot from '../Components/Foot';
import {IonLoading,IonIcon} from '@ionic/react'
import { starSharp } from 'ionicons/icons'

function ResultatRecherche(props) {
    const search = 'produit/search'
    const  [load, setload] = useState(false)
	const [produit, setproduit] = useState([]);
    const  [user, setuser] = useState({})
    const [showLoading, setShowLoading] = useState(true)
    const isStaf=props.isStaf
    const handlebadge=props.handlebadge
  

	useEffect(() => {
		axiosInstance
        .get(search + '/' + window.location.search)
        .then((res) => {
			//const allPosts = res.data;
			setproduit(res.data);
            setload(true)
			console.log(res.data);
		});
    },[])
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

   
    const notify = () => toast.success("produit ajouté au panier ",
    {
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });


    const  HandleAddCart = id =>{
        axiosInstance
      .post("produit/addcart/",{id})
       .then(res=>{
       // console.log(res.data)
       handlebadge()
       notify()

        
        })
    }
 
    
    return (
        <div >
            {load?
             <div>
        <div className=" row -3 m-3">
        
        { produit.length>0 ? produit.map(pi=>
          
          <div className="col-md-3 mt-1 ">
         
          <Card style={{ width: '15rem' }}>
          <Card.Title style={{textAlign:'center'}}> <Link to={`/detail/${pi.slug}`}>{pi.nom}</Link></Card.Title>
        
           <Card.Img src={pi.thumbnail} alt="" className="img-fluid" 
            style={{objectFit: 'contain',height: '200px'}}/>
           <Card.Text className='mt-2' style={{textAlign:'center'}}> {pi.prix} CFA</Card.Text>
               {user.id===pi.vendeur?<div>
                <IonIcon icon={starSharp} style={{zoom:3,color:'red'}}/>
               </div>:user.id==null? <Card.Text className='mt-2' style={{textAlign:'center'}}> 
            <p> <Link href='/connexion'>Connectez vous et commencez vos shoppings</Link></p>
             <p> <Link  to={`/boutique/${pi.slug}`}>Voir la boutique du vendeur </Link></p></Card.Text>
               :   <Card.Text className='mt-2 right' style={{textAlign:'center'}}>
                   {isStaf? null:
                   <div>
               <button style={{border:'none' ,background:'none'}} onClick={()=>HandleAddCart(pi.id)}><AddShoppingCartIcon/></button> 
               <Link to={`/boutique/${pi.slug}`}>Voir la boutique du vendeur </Link>
               </div>}</Card.Text>}               
           </Card>
           </div>):<h1 style={{textAlign:'center',color:'magenta'}}>Oups aucun produit ne correspond a la recherche</h1>}
      </div>
      </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
    />}

    <Foot/>   
        </div>
    )
}

export default ResultatRecherche;
