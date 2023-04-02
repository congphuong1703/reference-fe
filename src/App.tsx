import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheLayout from './components/common/TheLayout'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<TheLayout />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App
