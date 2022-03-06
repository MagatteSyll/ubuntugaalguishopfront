import React,{Fragment,useState,useEffect} from 'react'
import {IonText,IonIcon,IonCard,IonGrid,IonRow,IonCol,IonItem} from '@ionic/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import {starOutline,personAddOutline,personRemoveOutline} from 'ionicons/icons'
import Carousel from "react-multi-carousel";
import {Card} from 'react-bootstrap'
import Verifollower from './SousComponent/Verifollower'





function AccueilDesk({user,vendeur,populaire,occas,islog,addfollower,removefollover,category}) {

  const btnremovefollow=id=>(
  <button className='btndrop' onClick={()=>removefollover(id)}>
  <IonIcon icon={personRemoveOutline} className='zoomicon'/></button>
   )
const btnaddfollow=id=>(
 <button className='btndrop'><IonIcon icon={personAddOutline}
 className='zoomicon'  onClick={()=>addfollower(id)}/>
  </button>
   )
    return (
        <div className='desk'>
        <div className='content'>
        <CartAccueil category={category}/>
      {// <Populaire populaire={populaire}/>
}
        <MeilleurVendeur user={user} vendeur={vendeur} islog={islog} addfollower={addfollower}
         btnremovefollow={btnremovefollow} btnaddfollow={btnaddfollow}
        removefollover={removefollover} />
        <Occasions occas={occas}/>
        </div>
        </div>
    )
}




function MeilleurVendeur({user,vendeur,islog,addfollower,removefollover,btnaddfollow,btnremovefollow}) {
    return( 
    <div>
      
          <div className='meilleurvendeurdesk'>
           {vendeur.length>0?
           <div>
          <h3>Nos meilleurs vendeurs  </h3>
          <Swiper 
           spaceBetween={10}
           slidesPerView={5}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            {vendeur.map(v=>
              <SwiperSlide>
                <Link className='nodecolink' to={`/boutique/${v.id}/${v.user.prenom+""+v.user.nom}`}>
                  <p className='pnommeilleurvendeur'>{v.user.prenom} {v.user.nom}</p> 
             <img src={`http://127.0.0.1:8001${v.logo}`} alt='' className='imgpopmobile'/>
             </Link>
                 
               {/*<p className='pnommeilleurvendeur'>
                  <StarRatings
              rating={v.note_vendeur}
              starRatedColor="magenta"
              // changeRating={noter}
              numberOfStars={5}
              name='rating'
              starDimension='10px'
              />
            </p>*/}
              <p className='centerbtn' > ({v.note_vendeur})
              </p>    
              {islog?
              <span className='centerbtn'>
              {v.user.id===user.id?<button className='btndrop w3-blue'> Vous</button>:
              <Verifollower user_id={user.id} boutique_id={v.id} addfollower={addfollower}
               removefollover={removefollover}/>}
               </span>:null}
              
              </SwiperSlide>)}
          </Swiper> 
          </div>:null}
          </div>
    </div>
    
    
    );
  }
  function Populaire({populaire}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
    <div className='populaire'>
    <h3>Populaire</h3>
    <IonCard>
     <Carousel
     responsive={responsive}
     containerClass="carousel-container" 
     infinite={true}
      >
          {populaire.map(cat=>  
          <Fragment>
         <img  src={`http://127.0.0.1:8001${cat.image}`} alt="" 
          key={cat.id} className='imgpop' /> 
          <p style={{marginLeft:'5px'}}>{cat.category} </p>
          </Fragment>
           )}  
        </Carousel>
        </IonCard>
        </div>
    )
}

function Occasions({occas}) {
    

    return (
        <div className='occasion'>
         {occas.length>0?
         <Fragment>
        <h3>Du materiel d occasion pour vous</h3>
           <IonGrid>
               <IonRow>
                 {occas.map(oc=>
                   <IonCol size='2' key={oc.id}> 
                    <Card>
                    <img src={`http://127.0.0.1:8001${oc.thumbnail}`} alt='' className='imgvendeur'/>
                   <Link className='linkpanier' to={`detail/${oc.slug}/${oc.nom}`}> <p>
                    {oc.nom}  <IonText style={{color:'red'}}>{oc.prix}</IonText> CFA
                    </p></Link>
                    </Card>
                   </IonCol>)}
               </IonRow>
            </IonGrid> 
            </Fragment>:null}
        </div>
    );
}
function CartAccueil({category}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.5,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div>
         <IonCard>
            <IonGrid>
                <IonRow>
                <IonCol size='2'>
              <IonItem>
              Enfants
             </IonItem> 
                <IonItem>
                 Mode et beaute
                 </IonItem>
                 <IonItem>
                 Accessoires
                 </IonItem>
                <IonItem>
                 Vetements
                 </IonItem>
                 <IonItem>
                Chaussures
               </IonItem>
              <IonItem>
              Bijouterie
             </IonItem>
                    </IonCol>
                 <IonCol size='8'>
                <Fragment>
                <h3 className='centerbtn'>Par categorie</h3>
            <Carousel
            responsive={responsive}
            containerClass="carousel-container" 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={1000} >
                {category.map(cat=>
                    <Fragment>
                    <p>{cat.category}</p>
                    <img src={`http://127.0.0.1:8001${cat.image}`} alt="" className='imgcategory'  />
                    <p> <Link to={`/category/${cat.category}`}>Voir plus </Link> </p>  
                    </Fragment> )}
            
             </Carousel>
             </Fragment>
                </IonCol>
                <IonCol size='2'>
             <IonItem>
             Electromenagers
             </IonItem> 
             <IonItem>
             Meubles et fournitures de maison
            </IonItem>
            <IonItem>
              Occasions
            </IonItem>
             <IonItem>
              Nouvelle technologie
            </IonItem>
            <IonItem>
              Bricolage
            </IonItem>
            <IonItem>
              Jeu Video
            </IonItem> 
               </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard> 
        </div>
    )
}




export default AccueilDesk
