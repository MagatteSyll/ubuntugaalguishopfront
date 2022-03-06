import { IonCard, IonCol, IonGrid, IonIcon, IonRow, IonSegment, IonText,IonSearchbar } from '@ionic/react'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {personCircleOutline} from 'ionicons/icons'
import {NavDropdown} from 'react-bootstrap'
import axiosInstance from '../../axios';




function NavStaff({user}) {
  const history=useHistory()

  const deconnexion=()=>{
    localStorage.removeItem('__jdkm__');
    localStorage.removeItem('__jvqm__');
    axiosInstance.defaults.headers['Authorization'] = null;
    history.push('/')
    window.location.reload()
  
   }
  
    return (
    <div className='desk navdesk'>
    <IonGrid>
      <IonRow>
        <IonCol size='3' >
        <IonCard>
          logo
        </IonCard>
        </IonCol>
        <IonCol size='2'>
        <Me deconnexion={deconnexion} user={user}/>
        </IonCol>
        <IonCol size='7'>
          <BarSearch/>
          
        </IonCol>
        <IonCol size='3'>
         <IonSegment>
         <button className='nostylebtn'> Aide technique</button>
         </IonSegment>   
        </IonCol>
      </IonRow>
    </IonGrid>
    </div>
    )
}
function BarSearch() {
  const history = useHistory();
  const  [data, setData] = useState({
      search:''
    })
       const gosearch=e=>{
  
      history.push({
          pathname: `/recherchecommande/${data.search}`
      })
      window.location.reload();
  }
  return (
      <div className=' container mb-3'>
       <IonSearchbar
    value={data.search}
    onIonChange={(newvalue)=>setData({search:newvalue})}
   //onRequestSearch={()=>gosearch(data.search)}
   placeholder='Numero de la commande '
            />    
      </div>
  )
}

function Me({user,deconnexion}){
  return(
    <NavDropdown
    id="nav-dropdown-dark-example"
    title={<IonText> <IonIcon icon={personCircleOutline} className='iconuser' />
    <IonText className='usernom' >{user.prenom}</IonText></IonText>}
    variant="secondary">
    <div>
    <NavDropdown.Item ><button onClick={deconnexion} className='btndrop'> 
    deconnexion </button></NavDropdown.Item>     
    </div>
  </NavDropdown>
  )
}

export default NavStaff
