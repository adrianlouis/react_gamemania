import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Destaques from './Destaques';
import Banner from './Banner';
import Cart from './Cart';
import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <GlobalStorage>
    < Header />
    {/* <Banner /> */}
    <Destaques/>
      <Cart />

    </GlobalStorage>
  );
}

export default App;
