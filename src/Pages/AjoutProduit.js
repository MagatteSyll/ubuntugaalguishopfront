import React,{useState,useEffect,useRef,Fragment} from 'react'
import {  IonButton,IonIcon, 
  IonToast,IonLoading } from '@ionic/react'
import {Form ,Container,Row,Col,Card,} from  'react-bootstrap'
import {  camera } from 'ionicons/icons'
import axiosInstance from '../axios';
import axios from 'axios'
import { useHistory } from 'react-router';
import {toast} from 'react-toastify'
import AjoutDesk from '../Components/Desk/AjoutDesk';
import AjoutMobile from '../Components/Mobile/AjoutMobile';




export default function AjoutProduit() {
  const  [image, setimage] = useState([]) 
  const  [imageunique, setimageunique] = useState([]) 
  const [cat,setcat]=useState([])
  const [catload, setcatload] = useState(false)
  const imgref=useRef(null)
  const picvariref=useRef(null)
  const imgrefunique=useRef(null)
  const picuniqueref=useRef(null)
  const  [tosti, settosti] = useState(false)
  const  [disp, setdisp] = useState([])
  const  [dispunique, setdispunique] = useState([])
  const  [picload, setpicload] = useState(false)
  const  [picloadunique, setpicloadunique] = useState(false)
  const  [active, setactive] = useState(false)
  const [region, setregion] = useState([])
  const  [regionload, setregionload] = useState(false)
  const [devise, setdevise] = useState([])
  const [showLoading, setShowLoading] = useState(true);
  const [deviseload, setdeviseload] = useState(false)
  const  [nonvaria, setnonvaria] = useState(true)
  const  [varia, setvaria] = useState(false)
  const  [seg, setseg] = useState('sansvariation');
  const history=useHistory()
  const  [tost, settost] = useState(false)
  const  [picvari, setpicvari] = useState() 
  const  [picunique, setpicunique] = useState()
  const  [data, setdata] = useState({
      nom:'',
      description:'',
      prix:'',
      taille1:'',
      couleur1:'',
      qte1:'',
      taille2:'',
      couleur2:'',
      qte2:'',
      taille3:'',
      couleur3:'',
      qte3:'',
      taille4:'',
      couleur4:'',
      qte4:'',
      taille5:'',
      couleur5:'',
      qte5:'',
      taille6:'',
      couleur6:'',
      qte6:'',
      taille7:'',
      couleur7:'',
      qte7:'',
      taille8:'',
      couleur8:'',
      qte8:'',
      taille9:'',
      couleur9:'',
      qte9:'',
      taille10:'',
      couleur10:'',
      qte10:'',
      category:'',
      region:'',
      devise:'',
   })
  const  [dataunique, setdataunique] = useState({
    nom:'',
    description:'',
    prix:'',
    size:'',
    color:'',
    qte:'',
    category:'',
    region:'',
    devise:''
    

})
  
  useEffect(() => {
      axios
      .get('http://127.0.0.1:8001/api/produit/category/')
      .then(res=>{
          //console.log(res.data)
          setcat(res.data)
          setcatload(true)
      })
      
  }, [])
  useEffect(()=>{
    axios
      .get('http://127.0.0.1:8001/api/produit/region/')
      .then(res=>{
          //console.log(res.data)
          setregion(res.data)
          setregionload(true)
      })

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
  const  handledevise=e=>{
    
    setdataunique({...dataunique,devise:e.target.value})
  }
 const handledevisevari=e=>{
    
  setdata({...data,devise:e.target.value})}

  const handlenonvaria=()=>{
    //console.log('actif')
     setseg('sansvariation')
     setnonvaria(true)
     setvaria(false)}

const handlevaria=()=>{
  setseg('avecvariation')
     setnonvaria(false)
     setvaria(true)

}
  const handleref=e=>{
      imgref.current.click();}

const handlerefunique=e=>{
  imgrefunique.current.click();}
 const handlecat=e=>{
    
 setdata({...data,category:e.target.value})}

 const handlecatunique=e=>{
  setdataunique({...dataunique,category:e.target.value})}
  const handleregion=e=>{
    
  setdata({...data,region:e.target.value})}

  const handleregionunique=e=>{
    
    setdataunique({...dataunique,region:e.target.value})}
  
  const handledata=e=>{
      setdata({
          ...data,[e.target.name]:e.target.value.trim()
      })
  }
  const handledataunique=e=>{
    setdataunique({
        ...dataunique,[e.target.name]:e.target.value.trim()
    })
}
  const handleImageSelect=e=>{
    let file=e.target.files[0]
      if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
      ||file.type==='image/JPEG'||file.type==="image/PNG"){
        if(disp.length<10||image.length<10)
        {
        setdisp(prev=>([...prev,URL.createObjectURL(file)]))
        setimage((prev)=>([...prev,file])) 
        setpicload(true) 
      }}
      else{
        
      return;
      }

    }
    const handlevaripic=index=>{
      setpicvari(index)
      picvariref.current.click();

    }
    const handluniquepic=index=>{
      setpicunique(index)
      picuniqueref.current.click();

    }
  
  const modifvaripic=e=>{
   const  newdisp=[...disp]
   const newimage=[...image]
   let pic=e.target.files[0]
   newdisp[picvari]=URL.createObjectURL(pic)
   newimage[picvari]=pic
    setdisp(newdisp)
    setimage(newimage)
  }
  const modifuniquepic=e=>{
    const  newdisp=[...dispunique]
    const newimage=[...imageunique]
   let pic=e.target.files[0]
   newdisp[picunique]=URL.createObjectURL(pic)
   newimage[picunique]=pic
    setdispunique(newdisp)
    setimageunique(newimage)
   }
  const removevari=index=>{
    const  newdisp=[...disp]
    const newimage=[...image]
    newdisp.splice(index,1)
    newimage.splice(index,1)
    setdisp(newdisp)
    setimage(newimage)
    }
  const removunique=index=>{
    const  newdisp=[...dispunique]
    const newimage=[...imageunique]
    newdisp.splice(index,1)
    newimage.splice(index,1)
    setdispunique(newdisp)
    setimageunique(newimage) }

  const handleImageSelectunique=e=>{
    if(dispunique.length<10||imageunique.length<10)
       {
         for(let i=0;i<e.target.files.length;i++){
            let file=e.target.files[i]
            if(file.type==='image/jpg'||file.type==='image/jpeg'|| file.type==='image/png'||file.type==='image/JPG'
            ||file.type==='image/JPEG'||file.type==="image/PNG")
            {
              setdispunique(prev=>([...prev,URL.createObjectURL(file)]))
              setimageunique((prev)=>([...prev,file])) 
              setpicloadunique(true) 
            }
          }
         
        }
        
        else{
          return;
        }}
       
  
      
    
     

    const fetchdata=()=>{
      axiosInstance
      .get('produit/mesproduits/')
      .then(res=>{
         // console.log(res.data)
        // setproduit(res.data)     
      })
    }
    useEffect(() => {
      axiosInstance
      .get('utilisateur/isactive/')
      .then(res=>{
          //console.log(res.data)
          setactive(res.data)
      })
      
  }, [])
  const notify = () => toast.success("produit bien  ajouté  ",
  {
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const erreur= () => toast.success("Erreur!Verifiez les données entrées   ",
  {
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });

    const handlesubmitunique=e=>{
      e.preventDefault()
      //console.log(images)
      //console.log('hello')
      if(imageunique.length<3){
        return;
      }
      let formdata = new FormData();
      
      formdata.append('nom',dataunique.nom)
      formdata.append('prix',dataunique.prix)
      formdata.append('taille',dataunique.size)
      formdata.append('couleur',dataunique.color)
      formdata.append('qte',dataunique.qte)
      formdata.append('active',true)
      formdata.append('description',dataunique.description)
      formdata.append('category_id',dataunique.category)
      formdata.append('devise_id',dataunique.devise)
      formdata.append('region_id',dataunique.region)
      formdata.append('img1',imageunique[0])
      formdata.append('img2',imageunique[1])
      formdata.append('img3',imageunique[2]) 
     
      if(imageunique.length===4){
      formdata.append('img4',imageunique[3])
    }

      if(imageunique.length===5){
      formdata.append('img5',imageunique[4])}
    if(imageunique.length===6){
      formdata.append('img6',imageunique[5])
    }
    if(imageunique.length===7){
      formdata.append('img7',imageunique[6])
    }
    if(imageunique.length===8){
      formdata.append('img8',imageunique[7])
    }
    if(imageunique.length===9){
      formdata.append('img9',imageunique[8])
    }
    if(imageunique.length===10){
      formdata.append('img10',imageunique[9])
    }
    axiosInstance
      .post('produit/ajoutunique/',formdata,{headers: 
        {'content-type': 'multipart/form-data'}
      })
      .then(res=>{
           fetchdata()
           history.push('/maboutique')
            notify()    
     // console.log(res.data)
    })
    .catch(()=>{
       return;
    })
    }
    const handlesubmit=e=>{
      e.preventDefault()
      //console.log(images)
      //console.log('hello')
      if(image.length<2){
        return;
      }
      let formdata = new FormData();
      
      formdata.append('nom',data.nom)
      formdata.append('prix',data.prix)
      formdata.append('active',true)
      formdata.append('description',data.description)
      formdata.append('category_id',data.category)
      formdata.append('devise_id',data.devise)
      formdata.append('region_id',data.region)
      formdata.append('img1',image[0])
      formdata.append('couleur1',data.couleur1)
      formdata.append('taille1',data.taille1)
      formdata.append('qte1',data.qte1)
      formdata.append('img2',image[1])
      formdata.append('couleur2',data.couleur2)
      formdata.append('taille2',data.taille2)
      formdata.append('qte2',data.qte2)
      if(image.length===3)
      {
      formdata.append('img2',image[2]) 
      formdata.append('couleur3',data.couleur3)
      formdata.append('taille3',data.taille3)
      formdata.append('qte3',data.qte3)
      }
      if(image.length===4){
      formdata.append('img3',image[3])
      formdata.append('couleur4',data.couleur4)
      formdata.append('taille4',data.taille4)
      formdata.append('qte4',data.qte4)
    }

      if(image.length===5){
      formdata.append('img5',image[4])
      formdata.append('couleur5',data.couleur5)
      formdata.append('taille5',data.taille5)
      formdata.append('qte5',data.qte5)

    }
    if(image.length===6){
      formdata.append('img6',image[5])
      formdata.append('couleur6',data.couleur6)
      formdata.append('taille6',data.taille6)
      formdata.append('qte6',data.qte6)
    }
    if(image.length===7){
      formdata.append('img7',image[6])
      formdata.append('couleur7',data.couleur7)
      formdata.append('taille7',data.taille7)
      formdata.append('qte7',data.qte7)
    }
    if(image.length===8){
      formdata.append('img8',image[7])
      formdata.append('couleur8',data.couleur8)
      formdata.append('taille8',data.taille8)
      formdata.append('qte8',data.qte8)
    }
    if(image.length===9){
      formdata.append('img9',image[8])
      formdata.append('couleur9',data.couleur9)
      formdata.append('taille9',data.taille9)
      formdata.append('qte9',data.qte9)
    }
    if(image.length===10){
      formdata.append('img10',image[9])
      formdata.append('couleur10',data.couleur10)
      formdata.append('taille10',data.taille10)
      formdata.append('qte10',data.qte10)
    } 
    

      //console.log(data.category)
      axiosInstance
      .post('produit/ajout/',formdata,{headers: 
        {'content-type': 'multipart/form-data'}
      })
      .then(res=>{
          fetchdata()
           history.push('/maboutique')
            notify()    
      //console.log(res.data)
    })
    .catch(()=>{
       return;
    })

  }


    return (
     
    <div >
       <Container >             
           {active?
           <div>
             {catload?
             <>
             {regionload?
             <>
             {deviseload?
             <>
             <AjoutDesk picload={picload} disp={disp} imgref={imgref} handleImageSelect={handleImageSelect}
             handleref={handleref} handlesubmit={handlesubmit} handledata={handledata} handlecat={handlecat}
            cat={cat} handleregion={handleregion} region={region}  data={data} 
            varia={varia} nonvaria={nonvaria} seg={seg} handlenonvaria={handlenonvaria} handlevaria={handlevaria}
            imgrefunique={imgrefunique} handleImageSelectunique={handleImageSelectunique}
            dispunique={dispunique} handlerefunique={handlerefunique} handledataunique={handledataunique}
            handlecatunique={handlecatunique} handleregionunique={handleregionunique} dataunique={dataunique}
             picloadunique={picloadunique} handlesubmitunique={handlesubmitunique}
             handluniquepic={handluniquepic} handlevaripic={handlevaripic} modifvaripic={modifvaripic}
              modifuniquepic={modifuniquepic} picvariref={picvariref} picuniqueref={picuniqueref} 
              removevari={removevari} removunique={removunique} devise={devise} handledevise={handledevise}
              handledevisevari={handledevisevari}/>
            <AjoutMobile  picload={picload} disp={disp} imgref={imgref} handleImageSelect={handleImageSelect}
             handleref={handleref} handlesubmit={handlesubmit} handledata={handledata} handlecat={handlecat}
            cat={cat} handleregion={handleregion} region={region}  data={data}
            varia={varia} nonvaria={nonvaria} seg={seg} handlenonvaria={handlenonvaria} handlevaria={handlevaria}
            imgrefunique={imgrefunique} handleImageSelectunique={handleImageSelectunique}
        dispunique={dispunique} handlerefunique={handlerefunique} handledataunique={handledataunique}
        handlecatunique={handlecatunique} handleregionunique={handleregionunique} dataunique={dataunique}
        picloadunique={picloadunique} handlesubmitunique={handlesubmitunique}
        handluniquepic={handluniquepic} handlevaripic={handlevaripic} modifvaripic={modifvaripic}
        modifuniquepic={modifuniquepic}  picvariref={picvariref} picuniqueref={picuniqueref}
         removevari={removevari} removunique={removunique} devise={devise} handledevise={handledevise}
         handledevisevari={handledevisevari}/>
       </> :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
      />} </>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
      />} </>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
      />} </div>
         :<IonLoading
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
    </Container>
    </div>
   
  
    


    
    )
}


