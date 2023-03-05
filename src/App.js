import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import CarList from './components/CarList';
import Login from './components/Login'
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#282c34'}}>
          <Typography variant="h6"  >
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
        {/*<CarList />*/}
      <Login />
    </div>
  );
}

export default App;
