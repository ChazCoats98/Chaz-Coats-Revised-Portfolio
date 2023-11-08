import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import './App.css';

//renders nav bar across all pages
function App() {
return (
  <>
  <Nav />
  <Outlet />
  </>
)
}

export default App;
