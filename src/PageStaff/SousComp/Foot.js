import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import axiosInstance from '../axios';
import { useHistory } from 'react-router';

export default function Foot() {
  const history=useHistory()

  const Deconnexion=()=>{
   
		localStorage.removeItem('__jdkm__');
		localStorage.removeItem('__jvqm__');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/connexion');
  }
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#000000"
        color="white"
      >
        <Container >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box> <Typography  variant="h6" color="#d500f9" gutterBottom>Signalez un probleme technique</Typography></Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box >
              <Typography  variant="h6" color="#d500f9" gutterBottom>De l aide en Ligne</Typography></Box>
            </Grid> 
            <Grid item xs={12} sm={3}>
              <Box >
              <Typography  variant="h6" color="#d500f9" gutterBottom>Guide</Typography></Box>
            </Grid> 
            <Grid item xs={12} sm={3}>
              <Box> <Typography  variant="h6" color="#d500f9" gutterBottom><button 
              style={{border:'none',background:'none' ,color:'white'}} onClick={Deconnexion}>Deconnexion</button></Typography></Box>
            </Grid>
          </Grid>  
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
           Gaalgui &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
