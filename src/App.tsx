import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Simulator from './pages/Simulator'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Simulator />} />
      </Routes>
    </BrowserRouter>
  )
}
