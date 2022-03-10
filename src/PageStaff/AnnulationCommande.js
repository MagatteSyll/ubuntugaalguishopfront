import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'






function AnnulationCommande(props) {
       let id=props.match.params.id
       const [commande,setcommande]=useState([])
       const [load,setload]=useState(false)
       const [motif,setmotif]=useState()
       const history=useHistory()

      useEffect(()=>{
           getcommande()
      },[])

    const notify = () => toast.success("Commande annulée avec succes!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });

       const getcommande=()=>{
       	axiosInstance
       	.post('staff/commande/',{id:id})
       	.then(res=>{
       		setcommande(res.data)
       		setload(true)
       	})
       }
  const handlemotif=e=>{
  	setmotif(e.target.value)
  }
  const handlennulation=e=>{
  	e.preventDefault();
  	if(motif==="")
  	{
  		return;
  	}
  axiosInstance
  .post('staff/annulationcommande/',{id:id,motif:motif})
  .then(res=>{
    let formdata=new FormData()
    formdata.append('phone',res.data.phone_gaalguiMoney)
    formdata.append('montant',res.data.total)
    formdata.append('commission',res.data.commission)
    formdata.append('livraison',res.data.livraison)
    axios
    .post('http://127.0.0.1:8000/api/client/annulationcommandegaalguishop/',formdata)
    .then(res=>{
       history.push('/')
       notify()
    })
  })
}

	return(
	   <div>
        {load?
        <div >
        <h1 className='redstyle centerbtn'>Annulation de la commande numero {commande.id}</h1>
        <form onSubmit={handlennulation} className='centerbtn'> 
        <p>Precisez le motif de l annulation</p>
        <textarea
        required onChange={handlemotif}
        rows="4" cols="40" name='description'
        />
        <p >
        <button type='submit' className="w3-btn w3-round-xxlarge w3-red"> Confirmer l annulation</button>
        </p>
        </form> 
       </div>:null}



		</div>


		);
	
}

export default AnnulationCommande;