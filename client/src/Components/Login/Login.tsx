import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/index.js";
import { addTokenAction, removeTokenAction } from "../../Store/token/actions.js";
import { addUserAction, removeUserAction } from "../../Store/user/actions.js";
import Logo from "../Lib/Logo";
import "./Login.scss";

function Login() {

  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const token = useSelector((state: any) => state.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (token) {
      dispatch(removeTokenAction())
    }

    if (user) {
      dispatch(removeUserAction())
    }
  }, [token, user]);

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const usernameInput = evt.target.querySelector('#userInp');
    const passwordInput = evt.target.querySelector('#passInp');

    if (usernameInput.value.trim() == null || passwordInput.value.trim() == null) {
      setError('Username and password are required');
    } else {
      const data = await login(usernameInput.value.trim(), passwordInput.value.trim());

      if (data.data.login.status !== 200) {
        setError(data.data.login.message);
      } else {
        dispatch(addTokenAction(data.data.login.token));
        dispatch(addUserAction(data.data.login.data));
        navigate(-1);
      }
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <Logo fs={36} lh={43} cl="#006AFF" />

          <form className="login__form" onSubmit={handleSubmit}>
            <h2 className="login__heading">
              Войти в систему
            </h2>
            <div className="login__block">
              <i className="left-icon bi bi-person"></i>
              <input type="text" className="login__input" placeholder="Login" id="userInp" defaultValue="admin" />
            </div>

            <div className="login__block">
              <i className="left-icon bi bi-lock"></i>
              <input type={show ? "text" : "password"} className="login__input" id="passInp" placeholder="Password" defaultValue='admin' />
              <button className="login__button" onClick={() => setShow(!show)}>
                {show ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
              </button>
            </div>

            <Link to="/recovery" className="login__link" >Забыли пароль?</Link>
            <input type="submit" value="Войти" className="login__submit" />
          </form>
          {error ? <p className="login__error">{error}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Login;
