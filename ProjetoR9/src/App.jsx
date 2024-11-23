import React, { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("Aluno");

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="container">
      <h2>Criar conta</h2>
      <p>Já possui cadastro? <a href="#">Entrar!</a></p>

      <div className="roles">
        {['Aluno', 'Mentor', 'Empresa', 'Professor'].map((r) => (
          <button
            key={r}
            className={role === r ? "role-button active" : "role-button"}
            onClick={() => handleRoleChange(r)}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="social-login">
        <button>Continuar com Google</button>
        <button>Continuar com Microsoft</button>
        <button>Continuar com Apple</button>
        <button>Continuar com Facebook</button>
        <button>Continuar com LinkedIn</button>
      </div>

      <div className="divider">ou</div>

      <form className="signup-form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="email" placeholder="Confirme seu e-mail" required />
        <input type="password" placeholder="Senha" required />
        <input type="password" placeholder="Confirme sua senha" required />
        <label>
          <input type="checkbox" required /> Li e concordo com os <a href="#">termos de uso</a>
        </label>
        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;