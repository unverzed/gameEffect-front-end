import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Form, Title, StyledLink } from "../signup/style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../../../contexts/usercontext";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken, setImage, setUsername, setBio, setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const URL = `https://gameeffects.herokuapp.com`;

  function createUser(event) {
    event.preventDefault();
    setLoading(true);

    const data = { login, password };
    const promise = axios.post(`${URL}`, data);
    promise.then((response) => {
      setToken(response.data.token);
      setImage(response.data.userinfo.icon);
      setUsername(response.data.userinfo.username);
      setBio(response.data.userinfo.bio);
      setUserId(response.data.userinfo.id);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
      setLogin("");
      setPassword("");
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
    });
    promise.finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
      <Form onSubmit={createUser}>
        <img src="https://media.discordapp.net/attachments/908466620643549235/1009330359420325939/controller.png" className="logo"/>
        <Title>GameEffect</Title>
        <input
          type="text"
          name="username"
          value={login}
          disabled={loading}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="username or email"
          required
        ></input>
        <input
          type="password"
          name="password"
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="loading">
              <ThreeDots color="#fff" />{" "}
            </div>
          ) : (
            "Login"
          )}
        </button>
        <StyledLink>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign Up</span>{" "}
          </Link>
        </StyledLink>
      </Form>
    </>
  );
}
