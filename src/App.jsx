import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import data from './data/data'

function App() {

  return (
    <>
      <div className="page-layout">
        <h1>Seattle Community Favorite BobaShops! </h1>
        <div className="boba-grid">
          {data.boba.map((shop) => (
            <Card key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App