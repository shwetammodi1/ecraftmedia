import { Routes, Route } from 'react-router-dom'
import EcraftHome from '../pages/EcraftHome'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EcraftHome />} />
      <Route path="/home" element={<EcraftHome />} />
    </Routes>
  )
}
