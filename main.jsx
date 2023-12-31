import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '/routes/Layout';
import DetailView from '../routes/DetailView.jsx'
import Card from './Components/card.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index={true} element={<App />} />
  </Route>
  <Route path="/details" element={<DetailView/>}/>
  <Route path="/brew-size" element={<Card/>}/>
</Routes>
</BrowserRouter>
)
