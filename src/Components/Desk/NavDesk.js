
import React,{ Fragment} from 'react';
import BarSearch from '../BarSearch';
import { NavDropdown,} from 'react-bootstrap'
import {IonIcon, IonSegment,
   IonPopover, IonText,IonListHeader, IonGrid, IonRow, IonCol, IonCard,IonBadge, IonItem} from '@ionic/react'
import {cartOutline,notificationsOutline,pricetagOutline,cashOutline,cardOutline,shirtOutline,walletOutline,
personCircleOutline,settingsOutline,caretDownOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'





function NavDesk({islog,handlevendre,handlenotify,handlaide,  handleachat, handleboutique,
   handlecommande, handlevente,popachat ,popboutik, popcommande, popvente,popanier,handleconnexion, handleinscription,
   handlepanier,badgecart,handlecompte,user,badgenotify,notifications,truncateString }) {
      console.log(islog)
    return (
      <div className='desk'>
      <div className='navdesk'>
     <IonGrid>
       <IonRow>
         <IonCol size='4'>
           <IonCard >
             logo logo logo
           </IonCard>
           </IonCol>
           {!islog?
           <IonCol size='2'>
            <button className='buttonsegment' onClick={handleconnexion}>
              Connexion
            </button> 
            <button className='buttonsegment' onClick={handleinscription}>
              Inscription
            </button>
            </IonCol>:
            <IonCol size='2'><IonText>{user.prenom}<IonIcon icon={personCircleOutline}/> </IonText></IonCol>}
             <IonCol size='1'>
             <Notify badgenotify={badgenotify} islog={islog} notifications={notifications}
             handlenotify={handlenotify} truncateString={truncateString}/>
          </IonCol>
         <IonCol size='3' style={{marginLeft:'35px'}}>
        <Me handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
        handlevente={handlevente} popachat={popachat} popboutik={popboutik} popcommande={popcommande}
         popvente={popvente} handleconnexion={handleconnexion} handleinscription={handleinscription} 
          handlecompte={handlecompte} islog={islog}/>
        </IonCol>
           <IonCol size='1'>
            <button className=' btncart' onClick={handlepanier}>
              <IonIcon icon={cartOutline} className='zoomicon'>
            </IonIcon> 
             {islog?
             <span>
             {badgecart <1?null:
              <IonBadge color="danger" className='cartbadge'>{badgecart}</IonBadge>}
              </span>:null}
            </button> 
            </IonCol> 
         <IonCol size='3'>
         <button className='nostylebtn' onClick={handlaide}> 
         Besoin d aide ?</button> 
        </IonCol>
        <IonCol size='3'>
        <IonSegment>  
        <button className='nostylebtn' onClick={handlevendre}> 
          <IonIcon icon={cashOutline} style={{zoom:'1'}} /> Vendre sur GaalguiShop</button>
        </IonSegment>
        </IonCol>
        <IonCol size='6'>
           <BarSearch/>
        </IonCol>
       </IonRow>
     </IonGrid>
    </div>
    <IonPopover
   isOpen={popanier} 
   >
   <IonListHeader>Pour voir votre panier</IonListHeader>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button  onClick={handleconnexion} style={{color:'magenta'}} className='btndrop' onClick={handleconnexion}>Connectez vous </button> ou
         <button  onClick={handleinscription}  style={{color:'purple'}}className='btndrop'>Inscrivez vous</button>
       .</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>    
  </IonPopover >
    </div>
    )
}
function Me({handleachat, handleboutique,
  handlecommande,handlevente, popachat ,popboutik, popcommande, popvente,handleconnexion, handleinscription
  ,handlecompte,islog}) {
  return (
    <Fragment>
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText  className='dropicon'>GaalguiShop & moi <IonIcon icon={caretDownOutline}/> </IonText>}

    variant="secondary"
    className='dropdown'>
    <div >
    <NavDropdown.Item ><button onClick={handleboutique} className='btndrop'> <IonIcon icon={pricetagOutline}/> Ma boutique </button></NavDropdown.Item>
    <NavDropdown.Item ><button onClick={handleachat}  className='btndrop'> <IonIcon icon={cardOutline}/> Mes achats </button></NavDropdown.Item>
    <NavDropdown.Item > <button  onClick={handlecommande}  className='btndrop'><IonIcon icon={shirtOutline}/> Mes commandes </button> </NavDropdown.Item>
    <NavDropdown.Item ><button className='btndrop'> <IonIcon icon={walletOutline}/> Moyen de payement </button></NavDropdown.Item>
    {islog?
    <NavDropdown.Item > <button className='btndrop' onClick={handlecompte}><IonIcon icon={personCircleOutline}/>Mon compte 
    </button></NavDropdown.Item>:null}
    </div>
  </NavDropdown>
  <IonPopover
   isOpen={popboutik} 
   >
   <IonListHeader>Votre boutique vous attend</IonListHeader>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button  onClick={handleconnexion} style={{color:'magenta'}} className='btndrop' onClick={handleconnexion}>Connectez vous </button> ou
         <button  onClick={handleinscription}  style={{color:'purple'}}className='btndrop'>Inscrivez vous</button> pour ajouter des produits.</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPopover >
  <IonPopover isOpen={popvente} className='pop' side="start">
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
        <IonListHeader>Pour Vendre sur </IonListHeader>
        </IonCol>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button  onClick={handleconnexion} style={{color:'magenta'}} className='btndrop'>Connectez vous </button>  ou
         <button  onClick={handleinscription}  style={{color:'purple'}}className='btndrop'>Inscrivez vous</button>
         </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPopover>
  <IonPopover isOpen={popachat} className='pop'>
  <IonListHeader>Pour bebeficier de tous les produits </IonListHeader>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button onClick={handleconnexion} style={{color:'magenta'}} className='btndrop'>Connectez vous </button> ou
         <button  onClick={handleinscription}  style={{color:'purple'}}className='btndrop'>Inscrivez vous</button> </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPopover>
  <IonPopover isOpen={popcommande} className='pop'>
  <IonListHeader>Pour beneficier de tous les produits</IonListHeader>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button  onClick={handleconnexion} style={{color:'magenta'}} className='btndrop'>Connectez vous </button> ou
         <button  onClick={handleinscription}  style={{color:'purple'}}className='btndrop'>Inscrivez vous</button>
         </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPopover>
  </Fragment>
  );
}

function Notify({badgenotify,islog,notifications,truncateString,handlenotify}) {
  return (
    <Fragment>
      {islog?
   <NavDropdown
    id="nav-dropdown-dark-example"
    className='dropdown'
    onClick={handlenotify}
    title={<IonText className='dropicon'><IonIcon icon={notificationsOutline} className='zoomicon'/>
     {badgenotify <1?null:
   <IonBadge color="danger" className='notifybadge'>{badgenotify}</IonBadge>}
    </IonText>}>
      <Fragment>
     {notifications.length>0?
    <div className='dropit'> 
    {notifications.map(notify=>
    <NavDropdown.Item key={notify.id}>
      {notify.nature_notification==='avertissement'?
     <IonText> <Link to={`/avertissement/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link></IonText> 
     :
     notify.nature_notification==='etat commande'?
     <IonText> <Link to={`/etatcommande/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link></IonText> 
     :
     notify.nature_notification==='vente'?
     <IonText> <Link to={`/notificationdevente/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link></IonText> 
     :
     notify.nature_notification==='annulation d achat'?
     <IonText> <Link to={`/annulationachat/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link></IonText> 
     :
     notify.nature_notification==='annulation de vente'?
     <IonText> <Link to={`/annulationdevente/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link></IonText> 
     :notify.nature_notification==='desactivation boutique'?
     <IonText> <Link to={`/desactivationboutique/${notify.id}`} className='link'> {truncateString(notify.message,30)} </Link>
     </IonText>:notify.nature_notification==='pour follower'?
     <IonText> <Link to={`/nouveauproduit/${notify.id}/${notify.produit.nom}`} className='link'> {truncateString(notify.message,45)} </Link>
     </IonText>:null}
    </NavDropdown.Item>)}  
    </div>:<NavDropdown.Item >
      Oups!Vous n avez aucune notification 
    </NavDropdown.Item>}
    </Fragment>
  </NavDropdown>:<NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText className='dropicon'><IonIcon icon={notificationsOutline} className='zoomicon dropicon'/>
    </IonText>}>
    <div >
    <NavDropdown.Item >
      <IonText> <Link to='/connexion'> Connectez </Link>  vous pour voir vos notifications</IonText> 
    </NavDropdown.Item> 
    </div>
  </NavDropdown>}
  </Fragment>
  );
}



export default NavDesk

