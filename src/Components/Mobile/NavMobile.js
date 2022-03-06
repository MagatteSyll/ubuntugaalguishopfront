import { IonCard, IonCol, IonGrid, IonRow,IonText,
  IonIcon,IonListHeader,IonPopover,IonBadge, IonSegment, IonSegmentButton} from '@ionic/react'
import React,{Fragment} from 'react'
import BarSearch from '../BarSearch'
import {pricetagOutline,notificationsOutline,cardOutline,shirtOutline,walletOutline,
  personCircleOutline,caretDownOutline,cartOutline,} from 'ionicons/icons'
import { Link } from 'react-router-dom';
import { NavDropdown} from 'react-bootstrap'




function NavMobile({islog,handlevendre,handlenotify,handlaide,  handleachat, handleboutique,
  handlecommande, handlevente,popachat ,popboutik, popcommande, popvente,popanier,handleconnexion, handleinscription,
  handlepanier,badgecart,handlecompte,user,badgenotify,notifications,truncateString }) {
   
    return (
        <div className='mobile'>
           <IonGrid>
             <IonRow>
             <IonCol size='1'>
                  {islog?
                <IonText><IonIcon icon={personCircleOutline} className='zoomicon'/> </IonText>   
             :
                <button className='buttonsegment'>
                <Link to='/connexion'> <IonText><IonIcon icon={personCircleOutline} className='zoomicon' /> </IonText> </Link>  
                </button>}
                 </IonCol>
             <IonCol size='2'>
                 <button className='vendrebtn'>Vendre sur  </button>
                 </IonCol>
                 <IonCol size='4'>
                  <IonCard>logo logo</IonCard>
                 </IonCol>
                
                 <IonCol size='3'>  
               <Notify badgenotify={badgenotify} islog={islog} notifications={notifications}
               handlenotify={handlenotify} truncateString={truncateString}/> 
                </IonCol>
                 <IonCol size='2'>  
                 <button className='btncart buttonsegment' onClick={handlepanier}>
                 <IonIcon icon={cartOutline} className='zoomicon'/>
                  {islog?
                 <span>
                {badgecart <1?null:
                 <IonBadge color="danger" className='cartbadge'>{badgecart}</IonBadge>}
                 </span>:null}
                 </button>
                 </IonCol>
                
             <IonCol size='3'>
            <EtMe
            handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
            handlevente={handlevente} popachat={popachat} popboutik={popboutik} popcommande={popcommande}
             popvente={popvente} handleconnexion={handleconnexion} handleinscription={handleinscription}
             handlecompte={handlecompte} islog={islog}
            />
             </IonCol>
              <IonCol size='9'>
                <BarSearch/>
               </IonCol>
            </IonRow>  
         </IonGrid> 
        </div>
    )
}
function EtMe({handleachat, handleboutique,
  handlecommande,handlevente, popachat ,popboutik, popcommande, 
  popvente,handleconnexion, handleinscription,handlecompte,islog}) {
  return (
    <Fragment> 
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText  className='dropicon'>& moi <IonIcon icon={caretDownOutline}/> </IonText>}
    className='dropdown'>
    <div >
    <NavDropdown.Item ><button  onClick={handleboutique} className='btndrop'> <IonIcon icon={pricetagOutline}/> Ma boutique </button></NavDropdown.Item>
    <NavDropdown.Item ><button  onClick={handleachat} className='btndrop'> <IonIcon icon={cardOutline}/> Mes achats </button></NavDropdown.Item>
    <NavDropdown.Item > <button  onClick={handlecommande} className='btndrop'><IonIcon icon={shirtOutline}/> Mes commandes </button> </NavDropdown.Item>
    <NavDropdown.Item ><button className='btndrop'> <IonIcon icon={walletOutline}/> Moyen de payement </button>
    </NavDropdown.Item>
    {islog?
    <NavDropdown.Item > <button className='btndrop' onClick={handlecompte}><IonIcon 
    icon={personCircleOutline}/> Mon compte </button></NavDropdown.Item>:null}
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
        <IonText className='centerbtn'><button  style={{color:'magenta'}} onClick={handleconnexion} className='btndrop'>Connectez vous </button> ou
         <button onClick={handleinscription} style={{color:'purple'}}className='btndrop'>Inscrivez vous</button> pour ajouter des produit.</IonText>
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
        <IonText className='centerbtn'><button  onClick={handleconnexion}  style={{color:'magenta'}} className='btndrop'>Connectez vous </button> ou
         <button  onClick={handleinscription} style={{color:'purple'}}className='btndrop'>Inscrivez vous
         </button> </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPopover>
  <IonPopover isOpen={popcommande} className='pop'>
  <IonListHeader>Pour bebeficier de tous les produits</IonListHeader>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
         <IonCard>Logo logo</IonCard>
        </IonCol>
        <IonCol size='12'>
        <IonText className='centerbtn'><button  onClick={handleconnexion}  style={{color:'magenta'}} className='btndrop'>Connectez vous </button> ou
         <button onClick={handleinscription} style={{color:'purple'}}className='btndrop'>Inscrivez vous</button>
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
    <NavDropdown.Item key={notify.id} className='dropdown'>
     {notify.nature_notification==='avertissement'?
     <IonText> <Link to={`/avertissement/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link></IonText> 
     :
     notify.nature_notification==='etat commande'?
     <IonText> <Link to={`/etatcommande/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link></IonText> 
     :
     notify.nature_notification==='vente'?
     <IonText> <Link to={`/notificationdevente/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link></IonText> 
     :
     notify.nature_notification==='annulation d achat'?
     <IonText> <Link to={`/annulationachat/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link></IonText> 
     :
     notify.nature_notification==='annulation de vente'?
     <IonText> <Link to={`/annulationdevente/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link></IonText> 
     :notify.nature_notification==='desactivation boutique'?
     <IonText> <Link to={`/desactivationboutique/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link>
     </IonText>
     :notify.nature_notification==='pour follower'?
     <IonText> <Link to={`/nouveauproduit/${notify.id}/${notify.produit.nom}`} className='link'> {truncateString(notify.message,45)} </Link>
     </IonText>
     :notify.nature_notification==='note vendeur'?
      <IonText> <Link to={`/noterlevendeur/${notify.id}`} className='link'> {truncateString(notify.message,45)} </Link>
     </IonText>
     :null}
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

export default NavMobile
