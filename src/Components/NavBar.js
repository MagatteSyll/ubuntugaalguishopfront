import React,{useState,useEffect,Fragment} from 'react'
import NavDesk from './Desk/NavDesk';
import NavMobile from './Mobile/NavMobile';
import {useHistory} from 'react-router-dom'
import {IonPopover} from '@ionic/react'
import {IonLoading,} from '@ionic/react'
import NavStaff from '../PageStaff/SousComp/NavStaff'
import axiosInstance from '../axios';
import axios from 'axios'



 function NavBar({islog,handlebadge,badgecart,isStaf,truncateString,user}) {
   const history=useHistory()
   const  [popboutik, setpopboutik] = useState(false);
   const  [popvente, setpopvente] = useState(false);
   const  [popachat, setpopachat] = useState(false);
   const  [popcommande, setpopcommande] = useState(false);
   const  [showLoading, setShowLoading] = useState(true);
   const  [badgeload, setbadgeload] = useState(false);
   const  [popanier, setpopanier] = useState(false);
   const [notify, setnotify] = useState(false)
   const [notifications, setnotifications] = useState([])
   const  [badgenotify, setbadgenotify] = useState()
   const [result,setresult]=useState([])
   const [atrouve,setatrouve]=useState("")
  
  


  useEffect(()=>{
    handlebadge()
   // 
    setbadgeload(true)
  },[])
  useEffect(()=>{
     getnotification()

  },[])


  const getnotification=()=>{
    if(islog){
    axiosInstance
    .get('utilisateur/getnotification/')
    .then(res=>{
      //console.log(res.data)
      setnotifications(res.data.notifcationall)
     setbadgenotify(res.data.notifynolu.length)
      setnotify(true)
    
    })
  }
  else{
    setnotify(true)
  }
  }
   const handlevendre=()=>{
    history.push('/vendresurgaalguishop')
  }
  const handlesuivi=()=>{
    history.push('/suiviproduit')
  }
  const handlaide=()=>{
    history.push('/aide')
  }
  const handleboutique=()=>{
    if(islog){
      history.push('/maboutique')
    }
    else{
     history.push('/connexion') 
    }
  }
 const handlenotify=()=>{
   if(badgenotify>0){
   axiosInstance
   .put('utilisateur/handlenotify/handlenotif/')
   .then(res=>{
    // console.log(res.data)
     getnotification()


   })}
   else{
     return;
   }
 }
  const handleachat=()=>{
    if(islog){
      history.push('/historiquesdachat')
    }
    else{
      history.push('/connexion')
    }
  }
  const handlecommande=()=>{
    if(islog){
      history.push('/mescommandes')
    }
    else{
     history.push('/connexion')
    }
  }
  const handlepanier=()=>{
    if(islog){
      history.push('/monpanier')
    }
    else{
      history.push('/connexion')
    }
  }
  const handleconnexion=()=>{
    history.push('/connexion')
  }
  const handleinscription=()=>{
    history.push('/inscription')
    
    
  }
  const handlecompte=()=>{
    if(islog){
    history.push('/compte')
  }
  else{
    history.push('/connexion')
  }
  }

 
const handlerecherche=e=>{
  setatrouve(e.target.value)

}
  
const gosearch=e=>{
  if(atrouve===""|| atrouve===null||atrouve===undefined || atrouve.match(/^ *$/) !== null){
    return;
  }
  history.push({
  pathname: `/resultatrechercheproduit`,
  search: '?search=' + atrouve,
  })
  window.location.reload();
    }   

   return (
    <div>
      {isStaf?<NavStaff user={user} notifications={notifications} handlenotify={handlenotify}
       badgenotify={badgenotify} truncateString={truncateString} />:
    <Fragment>
    { badgeload && notify ?
    <Fragment>
    <NavDesk islog={islog} handlevendre={handlevendre} handlesuivi={handlesuivi} handlaide={handlaide}
     handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande} popachat={popachat}
      popboutik={popboutik} popcommande={popcommande} popvente={popvente} 
      handleconnexion={handleconnexion} handleinscription={handleinscription} handlepanier={handlepanier} 
       badgecart={badgecart} popanier={popanier} setpopanier={setpopanier} handlecompte={handlecompte} user={user}
        badgenotify={badgenotify} notifications={notifications} truncateString={truncateString}
         handlenotify={handlenotify} result={result} handlerecherche={handlerecherche} gosearch={gosearch}/>
    <NavMobile islog={islog} handlevendre={handlevendre} handlesuivi={handlesuivi} handlaide={handlaide}
      handleachat={handleachat} handleboutique={handleboutique} handlecommande={handlecommande}
       popachat={popachat} popboutik={popboutik} popcommande={popcommande} popvente={popvente}
         handleconnexion={handleconnexion} handleinscription={handleinscription} 
        handlepanier={handlepanier} badgecart={badgecart} popanier={popanier} setpopanier={setpopanier} handlecompte={handlecompte}
        user={user} badgenotify={badgenotify} notifications={notifications} truncateString={truncateString}
        handlenotify={handlenotify} result={result} handlerecherche={handlerecherche} 
         gosearch={gosearch}/>
        </Fragment>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
         </Fragment>}
      
    </div>
  );
}

export default NavBar;

