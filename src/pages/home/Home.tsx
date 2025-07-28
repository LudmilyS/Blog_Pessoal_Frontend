
function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vindo!
            </h2>
            <p className='text-xl'>
              Expresse aqui seus pensamentos e opniões
            </p>

            <div className="flex justify-around gap-4">
              <div className='rounded text-white 
            border-white border-solid border-2 py-2 px-4'
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

//  max-w-7x1 define o tamanho do container
//   flex-col é o flex para elementos verticais, uma coluna
//   items-center os itens dentro do container ficarão centralizados, verticalmente
//   W-screen define tamanho da tela
//   flex liha o flex layout
//   justify-center diz que o elemento ficará centralizado