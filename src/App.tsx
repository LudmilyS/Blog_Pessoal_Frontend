import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import FormTema from './components/temas/formtema/FormTema'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import DeletarTema from './components/temas/deletartema/DeletarTema'

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastrartema" element={<FormTema />} />
                            <Route path="/editartema/:id" element={<FormTema />} />
                            <Route path="/deletartema/:id" element={<DeletarTema />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App
