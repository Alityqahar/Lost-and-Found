import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Found from './pages/Found'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/found" element={<Found />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
