import { useState } from 'react'

export default function App() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [curso, setCurso] = useState('')
  const [cadastro, setCadastro] = useState('')

  
  function enviarCadastro() {
    setCadastro(`Cadastro de ${nome} para o curso ${curso} com email ${email} realizado com sucesso!`)
  }
  
  return(
    <div>
      <h2>Cadastro</h2>
      <input type="text"
       placeholder="Nome"
       value={nome} 
       onChange={(e) => setNome(e.target.value)}
       />

       <input type="text"
       placeholder="Email"
       value={email} 
       onChange={(e) => setEmail(e.target.value)}
       />

       
       <input type="text"
       placeholder="Curso"
       value={curso} 
       onChange={(e) => setCurso(e.target.value)}
       />

       <button onClick={enviarCadastro}>Enviar</button>
       <p>{cadastro}</p>
    </div>
  )

}




