import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CarList from './components/CarList';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#282c34'}}>
          <Typography variant="h6" sx={{color: 'white', fontWeight: 'bold', font: 'arial'}}>
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList />
    </div>
  );
}

export default App;
