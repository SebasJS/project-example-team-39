import { useState } from "react"


const handleSubmit = (event) => {
  event.preventDefault()
}


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div>
      <h1>FlickFinder</h1>
      <form onSubmit={handleSubmit}
      > 
        <div>
          <label htmlFor="Username">Usuario</label>
          <input 
            type='text'
            value={username}
            name='Username'
            placeholder=""
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="Password">Contraseña</label>
          <input 
            type='password'
            value={password}
            name='Password'
            placeholder=""
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input 
            type="button" 
            value="Iniciar"
          />
        </div>
      </form>
    </div>
  )
}

export default Login
