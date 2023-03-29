import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assents/treina.png";

const Login = () => {
  const [nome, setName] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigate()

  useEffect(() =>{},[nome, senha])

  return (
    <div className="form-signin w-25 m-auto py-5">
      <form>
        <div align="center">
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onKeyUp={(event) => {
              setName(event.target.value);
            }}
          />
          <label for="floatingInput">Nome de usuário</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onKeyUp={(event) => {
              setSenha(event.target.value);
            }}
          />
          <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Mantenha-me Conectado
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-warning" type="submit" onClick={() =>{
            navigation("/", {
                state: {
                    nome: nome,
                    senha: senha
                }
            })
        }}>
          Log in
        </button>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2023</p>
      </form>
    </div>
  );
};

export default Login;
