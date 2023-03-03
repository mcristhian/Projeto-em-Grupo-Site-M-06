import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Recursos from '../pages/Recursos'
import Login from '../pages/Login'
import Admin_recursos from '../pages/Admin/Admin_recursos'
import Admin_sobre from '../pages/Admin/Admin_sobre'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/recursos" element={<Admin_recursos />} />
            <Route path="/admin/sobre" element={<Admin_sobre />} />
        </Routes>
    )
}

export default Rotas