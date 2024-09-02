import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketplaceView from './pages/MarketplaceView';
import Navbar from './components/Navbar';
import Cart from './pages/Cart'
import FarmerDashboard from './pages/FarmerDashboard'
import ProductOverview from './pages/ProductOverview'
import  ChatInterface from './pages/chatInterface'
import ProfileSection from './pages/ProfileSection'
import VideoTutorials from './pages/VideoTutorials'



import './App.css'

function App() {
  

  return (
    <>
  <Router>
    <Navbar/>
      
        <Routes>
          <Route path="/" element={<MarketplaceView />} />
          <Route path="/cart" element={<Cart/>}/>.
          <Route path='/FarmerDashboard' element = { <FarmerDashboard/>}/>
          <Route path= '/ProductOverview' element= {<ProductOverview/>}/>
         <Route path= '/ChatInterface' element= {<ChatInterface/>}/>
         <Route path= '/ProfileSection' element= {<ProfileSection/>}/> 
         <Route path= '/VideoTutorials' element= { <VideoTutorials/>}/>
        </Routes>
      </Router>
      
      </>
  )
}

export default App
