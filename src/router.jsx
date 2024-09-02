import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketplaceView from './pages/MarketplaceView';


const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MarketplaceView />} />
        </Routes>
      </Router>   
    )
}