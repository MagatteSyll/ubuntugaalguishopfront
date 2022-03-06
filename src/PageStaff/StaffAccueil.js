import React from 'react'
import { useHistory } from 'react-router';
import ListCategory from '../Components/ListCategory';
import {IonSearchbar} from '@ionic/react'





function StaffAccueil() {
    const history=useHistory()
     const  [data, setData] = React.useState({
    search:''
  })
     const gosearch=e=>{

    history.push({
      pathname:`recherchecommande/${data.search}`,
      

    });


  }
    return (
        <div>
    
    <div className='container mt-5'>

     <IonSearchbar
      value={data.search}
      onChange={(newvalue)=>setData({search:newvalue})}
     onRequestSearch={()=>gosearch(data.search)}
     placeholder='rechercher une commande'
              />
  </div>
  <ListCategory/>

        </div>
    )
}

export default StaffAccueil
