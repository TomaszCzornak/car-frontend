import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './components/Login'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import LoggedOut from "./components/LoggedOut";

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
      <Login />
            <Router>
                <Routes>
                    <Route exact path="localhost:3006" component={<LoggedOut/>}></Route>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
