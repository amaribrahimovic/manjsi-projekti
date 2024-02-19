// Libraries
import { Route, Routes } from 'react-router-dom';

// CSS
import './App.css';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Cart from './pages/Cart';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Anchor from './components/Anchor';
import PrimaryButton from './components/PrimaryButton';

function App() {
  return (
    <>
      <Header>
        <Title>Shop</Title>
        <Navbar>
          <Anchor to='/'>Home</Anchor>
          <Anchor to='/aboutus'>About us</Anchor>
          <Anchor to='/products'>Products</Anchor>
          <PrimaryButton to='/cart'>Cart</PrimaryButton>
        </Navbar>
      </Header>

      <Routes>
          <Route index Component={Home}/>
          <Route path='/aboutus' Component={AboutUs}/>
          <Route path='/products' Component={Products}/>
          <Route path='/cart' Component={Cart}/>
      </Routes>
    </>
  );
}

export default App;