import './Login.css';

function Login() {

  return (
    <>
      <div className="place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnNoeHFzN2dkcXMyMXh2cmwwYjd
          2cWdvMzVsaGE5N28zYXpmdHZ4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckebyFUgKNQMYP7Q8S/giphy.gif" 
          alt="Foto do criador do conteúdo" className='rounded-full w-56' />
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"

            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"

            />
          </div>
          <button
            type='submit'
            className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-white w-1/2 py-2">
            <span>Entrar</span>
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            Cadastre-se
          </p>
        </form>
       
      </div>
    </>
  );
}

export default Login;