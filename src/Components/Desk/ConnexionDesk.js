import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {IonGrid,IonRow,IonCol,IonText} from '@ionic/react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";




//connexion desktop
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: '2',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1, 1, 0),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
function ConnexionDesk({handleSubmit,handlechange,showpassword,setshowpassword}) {
  const classes = useStyles();
    return (
        <div className='desk'>
        	<div className='connect'>
			<IonGrid>
			<IonRow>
			<IonCol size='3'>
			<div className='logoplace'>
            <h1 style={{color:'red'}}>Gaalgui(logo)</h1>
				
				</div>
				</IonCol>
				<IonCol size='8'>
				<form className='form' onSubmit={handleSubmit}>
				<Avatar className={classes.avatar}></Avatar>
				<p  className='centerbtn'><label className='centerbtn'>Telephone<IonText className='asterix'>*</IonText></label></p>
					<Input
						required
						style={{width:'90%'}}
						className="w3-input w3-border w3-margin"
						id="phone"
						placeholder='+221'
						name="phone"
						autoComplete="phone"
						autoFocus
						onChange={handlechange}
					/>
					<p  className='centerbtn'><label>Mot de passe <IonText className='asterix'>*</IonText></label></p>
					<Input
						required
						style={{width:'90%'}}
						className="w3-input w3-border w3-margin"
						name="password"
						type={showpassword?'text':'password'}
						id="password"
						placeholder='*********'
						autoComplete="current-password"
						onChange={handlechange}
						endAdornment={
							<InputAdornment position="end">
							 <IconButton
								onClick={()=>setshowpassword(!showpassword)}
									//onMouseDown={handleMouseDownPassword}
								  >
									{showpassword ? <Visibility /> : <VisibilityOff />}
								  </IconButton>
								</InputAdornment>}
					/>
					
					<p className='centerbtn'><button class="w3-btn w3-round-xxlarge w3-indigo" type="submit"  >
						Connexion</button></p>
				</form>
				</IonCol>
				<IonCol size='12'>
                <p className='centerbtn'>Vous n avez pas encore de compte?<IonText className='iontext'> <Link to='/inscription' className='nodecolink'> 
				S inscrire</Link></IonText></p>
				</IonCol>
				</IonRow>
				</IonGrid>
			</div>    
        </div>
    )
}

export default ConnexionDesk
