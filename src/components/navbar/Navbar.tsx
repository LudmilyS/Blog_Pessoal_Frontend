import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

  const navigate = useNavigate()

  const {handleLogout} = useContext(AuthContext)

  function logout() {

    handleLogout()
    alert("Desconectado com sucesso!")
    navigate('/')
  }

  return (
    <> 
      <div className= 'w-full flex justify-center py-4 bg-indigo-900 text-wthite'>
{/* W-full - define tamanho do container
flex- hbailita o flex
justify-center - itens centralizados horizontalmente
py-4 é o padding e o 'y' define superior e inferior
bg-indigo-900 - definindo background
text-white - cor do texto */}

        <div className= "container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
{/* container - define a largura máxima de um elemento para corresponder à largura mínima da tela
jusrify-between - itens ficarão distribuidos uniformente pelo c
ontainer
text-lg - define tamanho da fonta e da linha*/}

          <div className= 'flex gap-4'> {/*gap-4 - define o espaço entre os elementos */}
            Postagens
            Temas
            Cadastrar tema
            Perfil
            <Link to= '' onClick={logout} className="hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

