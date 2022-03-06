import React,{Fragment} from 'react';
import {IonText,IonIcon,IonCard,IonGrid,IonRow,IonCol} from '@ionic/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import {starOutline,personAddOutline,personRemoveOutline} from 'ionicons/icons'
import Verifollower from './SousComponent/Verifollower'
import Carousel from "react-multi-carousel";





function AccueilMobile({user,vendeur,category,occas,islog}) {
    return (
        <div className='mobile accueilmobile'>
        <Category category={category}/>
        {//<Populaire populaire={populaire}/>
}
        <Occasion occas={occas}/> 
        <MeilleurVendeur user={user} vendeur={vendeur} islog={islog} />
        </div>
    )
}


function MeilleurVendeur({user,vendeur,islog}) {
    return( 
    <div>
     <Fragment>
      {vendeur.length>0?
       <div>
      <h3>Nos meilleurs vendeurs  </h3>
       <Swiper 
      spaceBetween={25}
           slidesPerView={2.5}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            {vendeur.map(v=>
              <SwiperSlide>
                <Link className='nodecolink' to={`/boutique/${v.id}/${v.user.prenom+""+v.user.nom}`}>
                  <p className='pnommeilleurvendeur'>{v.user.prenom} {v.user.nom}</p> 
             <img src={`http://127.0.0.1:8001${v.logo}`} alt='' className='imgpopmobile'/>
             </Link> 
  
            {islog?
              <span className='centerbtn'>
              {v.user.id===user.id?<button> Vous</button>:
              <Verifollower user_id={user.id} boutique_id={v.id}/>}
               </span>:null}
              </SwiperSlide>)}
          </Swiper> 
          </div>:null}
          </Fragment>
    </div>
    
    
    );
  }
  function Category({category}) {
   const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 599, min: 464 },
          items: 2.5,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
   
  return (
  <div >
      <h3>Par categorie</h3>
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
  </div>
  );
}
function Occasion({occas}) {
   
  return(
        <div className='occasion'>
         {occas.length>0?
         <Fragment>
        <h3>Du materiel d occasion pour vous</h3>
        <Swiper
            spaceBetween={25}
            slidesPerView={2.2}
           // onSlideChange={() => console.log('slide change')}
           // onSwiper={(swiper) => console.log(swiper)}
            >
            {occas.map(oc=>
                 <SwiperSlide>
                 <img src={`http://127.0.0.1:8001${oc.thumbnail}`} alt='' className='imgvendeur'/>
                  <Link to={`detail/${oc.slug}/${oc.nom}`} className='linkpanier'>  <p>
                    {oc.nom}  <IonText style={{color:'red'}}>{oc.prix}</IonText> CFA
                    </p></Link>
                    </SwiperSlide>)} 
                </Swiper>       
            </Fragment>:null}
            </div>
  )
   ;
}
function Populaire({populaire}) {
   
  return (
    <div>
      <div className='populaire'>
    <h3>Populaire</h3>
     <IonCard>
    <IonGrid>
        <IonRow>
        {populaire.map(cat=>
            <IonCol size='4'>
             <img src={`http://127.0.0.1:8001${cat.image}`} alt="" 
          key={cat.id} className='imgvendeur' /> 
          <p style={{marginLeft:'5px'}}>{cat.category} </p>
            </IonCol> )}
        </IonRow>
         </IonGrid>    
        </IonCard>   
        </div>
        </div>
  
  );
}

export default AccueilMobile
