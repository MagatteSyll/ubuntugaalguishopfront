import React,{useState,useEffect,useRef,Fragment} from 'react'
import axiosInstance from '../axios';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { IonLoading,IonToast} from  '@ionic/react'
import {toast} from 'react-toastify'
import ModificationDesk from '../Components/Desk/ModificationDesk';
import ModificationMobile from '../Components/Mobile/ModificationMobile';

function ModificationProduit(props) {
    let slug=props.match.params.slug
    const history=useHistory()
    const  [tost, settost] = useState(false)
    const  [tosti, settosti] = useState(false)
    const  [cat,setcat]=useState([])
    const  [catload, setcatload] = useState(false)
    const  [produitimage, setproduitimage] = useState([])
    const  [prodimgload, setprodimgload] = useState(false)
    const  [load, setload] = useState(false)
    const  [devise, setdevise] = useState([])
    const  [varia, setvaria] = useState("detail")
    const  [variation, setvariation] = useState(false)
    const  [detail, setdetail] = useState(true)
    const  [deviseload, setdeviseload] = useState(false)
    const  [showLoading, setShowLoading] = useState(true);
    const  [region, setregion] = useState([])
    const  [regionload, setregionload] = useState(false)
    const  [produit, setproduit] = useState([])
    const  [disp, setdisp] = useState([])
    const imgref = useRef(null)
    
  
     const unimgref=useRef(null) 
     const [undata, setundata] = useState([{
         image:"",
         imagedisp:"",
         color:"",
         size:"",
         imgload:false,
         qte:""

     }])
   
    const  [data, setdata] = useState({
        nom:"",
        description:"",
        prix:"",
        taille:"",
        couleur:"",
        category:'',
        region:'',
        devise:"",
        
       })
  
   

  const notify = () => toast.success("produit bien  modifié  ",
  {
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
const handleclick=()=>{
  imgref.current.click()
}



 const handlebtnimg=()=>{
     unimgref.current.click() 
 }
 
 const handledelete=id=>{
     axiosInstance
     .delete(`produit/produitimgmanage/suppression/${id}`)
     .then(res=>{
        getproduitimg()
     })
     .catch(()=>{
         return;
     })
 }




 useEffect(() => {
      axios
      .get('https://gaalguishopbackend.herokuapp.com/api/produit/category/')
      .then(res=>{
          //console.log(res.data)
          setcat(res.data)
          setcatload(true)
      })
       
  }, [])

  useEffect(()=>{
    getproduitimg()
  },[])
  useEffect(()=>{
    getdevise()
  },[])
  const getdevise=()=>{
    axiosInstance
    .get('produit/devise/')
    .then(res=>{
      setdevise(res.data)
      setdeviseload(true)
    })
  }

  const getproduitimg=()=>{
    axiosInstance
    .post('produit/getproduitimg/',{slug:slug})
    .then(res=>{
      setproduitimage(res.data)
      setprodimgload(true)
    })
  }

    useEffect(()=>{
      getproduit()
    },[])

    const getproduit=()=>{
      axiosInstance
      .post('produit/singleproduit/',{slug:slug})
      .then(res=>{
          //console.log(res.data)
          setproduit(res.data)
          setload(true)
      })
    }

    useEffect(()=>{
      axios
        .get('https://gaalguishopbackend.herokuapp.com/api/produit/region/')
        .then(res=>{
            //console.log(res.data)
            setregion(res.data)
            setregionload(true)
        })
  
    },[])

    const handledetailsubmit=e=>{
      e.preventDefault()
      console.log(data.prix)
      console.log(produit.prix)
      let formdata=new FormData()
      formdata.append('category',data.category)
      formdata.append('region',data.region)
      formdata.append('devise',data.devise)
      formdata.append('prix',data.prix)
      if(data.nom!==undefined){
          formdata.append('nom',data.nom)
      }
      if(data.description!==undefined){
         formdata.append('description',data.description)
     }
     if(data.couleur!==undefined){
         formdata.append('couleur',data.couleur)
     }
     if(data.taille!==undefined){
      formdata.append('taille',data.taille)
  }
 
    if(data.qte!==undefined){
      formdata.append('qte',data.qte)
  }
      axiosInstance
      .put(`produit/produitmanage/modifsanspic/${slug}/`,formdata)
      .then(res=>{
          getproduit()
          notify()
         // console.log(res.data)
      })
    }

    const handlecat=e=>{
      console.log(e.target.value)
      setdata({...data,category:e.target.value})

  }

    const handleregion=e=>{
      console.log(e.target.value)
      setdata({...data,region:e.target.value})
  
  }
  const handledevise=e=>{
    console.log(e.target.value)
    setdata({...data,devise:e.target.value})
  }

    const handledata=e=>{
        setdata({
            ...data,[e.target.name]:e.target.value.trim()
        })
   }
   const handledetail=()=>{
     setvaria("detail")
     setdetail(true)
     setvariation(false)
   }
   const handlevariation=()=>{
    setvaria("variation")
    setdetail(false)
    setvariation(true)
  }
 
  const handleajout=e=>{
    e.preventDefault()
     let formdata=new FormData()
     formdata.append('id',produit.id)
     formdata.append("image",undata.image)
     formdata.append("color",undata.color)
     formdata.append("size",undata.size)
     formdata.append("quantite",undata.qte)
     axiosInstance
     .post('produit/newproduitimage/',formdata)
     .then(()=>{
        setundata({...undata,imagedisp:"",image:"",imgload:false})
         getproduitimg()
     })
 }
const handleajoutunique=e=>{
     e.preventDefault()
     let formdata=new FormData()
     formdata.append('id',produit.id)
     formdata.append("image",undata.image)
     axiosInstance
     .post('produit/newproduitimage/',formdata)
     .then(()=>{
        setundata({...undata,imagedisp:"",image:"",imgload:false})
         getproduitimg()
     })

}

 const handleundata=e=>{
        setundata({...undata,[e.target.name]:e.target.value.trim()
        })
    }
const handledeleteimgjout=()=>{
  setundata({...undata,imagedisp:"",image:"",imgload:false})
}
 const handleimageselect=e=>{
     let file=e.target.files[0]
     setundata({...undata,
        imagedisp:URL.createObjectURL(file),image:file,imgload:true})
    
 }
  
    return (
       <div >
         
         {load && prodimgload && catload &&regionload &&deviseload?
        <Fragment>
        <input  type='file'  accept='image/*'  ref={imgref} onChange={handleimageselect}
       className='filimg'/>
        <ModificationDesk 
         handledata={handledata} produit={produit} handlecat={handlecat}
       handleregion={handleregion} region={region} cat={cat}  produitimage={produitimage}
       devise={devise} undata={undata}  data={data} varia={varia} 
       variation={variation} detail={detail} handledetail={handledetail}
          handlevariation={handlevariation}  handledeleteimgjout={handledeleteimgjout} 
          handledetailsubmit={handledetailsubmit} handledelete={handledelete}
          handledevise={handledevise} 
          handleundata={handleundata} handleajout={handleajout} handleajoutunique={handleajoutunique}
          handleclick={handleclick} handledeleteimgjout={handledeleteimgjout}
      />
        <ModificationMobile 
           handledata={handledata} produit={produit} handlecat={handlecat}
         handleregion={handleregion} region={region} cat={cat}  produitimage={produitimage}
         devise={devise} undata={undata}  data={data} varia={varia} 
         variation={variation} detail={detail} handledetail={handledetail}
          handlevariation={handlevariation}  handledeleteimgjout={handledeleteimgjout} 
           handledetailsubmit={handledetailsubmit} handledelete={handledelete}
          handledevise={handledevise} 
           handleundata={handleundata} handleajout={handleajout} handleajoutunique={handleajoutunique}
          handleclick={handleclick} handledeleteimgjout={handledeleteimgjout} />
     </Fragment>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}

         <IonToast
        isOpen={tost}
        onDidDismiss={() => settost(false)}
        message="Il faut au minimum 3 photos et 6 au maximum! "
        duration={5000}
        position="middle"
        color='danger'
        buttons={[
          {
            side: 'end',
            icon: 'closeOutline',
            text:'ok',
            handler: () => {
                settost(false)
            }
          },
        ]}
      />
         <IonToast
        isOpen={tosti}
        onDidDismiss={() => settosti(false)}
        message="Seules les images sont autorisées! "
        duration={5000}
        position="middle"
        color='danger'
        buttons={[
          {
            side: 'end',
            icon: 'closeOutline',
            text:'ok',
            handler: () => {
                settost(false)
            }
          },
        ]}
      />
       </div>
    
        
    )
}

export default ModificationProduit
