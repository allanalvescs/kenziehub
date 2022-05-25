import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import { Container } from "./style";
import { FiEye, FiAtSign } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import loginUserThunk from "../../store/modules/User/thunk";
import addTokenThunk from "../../store/modules/Token/thunk";

import { Redirect, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const Schema = yup.object().shape({
    email: yup
      .string()
      .email("campo invalido! formato de email *")
      .required("campo obrigatório! *"),
    password: yup
      .string()
      .required("campo obrigatório! *")
      .min(6, "minimo de 6 caracteres"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleLogin = (data) => {
    dispatch(loginUserThunk(data));
  };

  const directyRaegister = () => {
    history.push("/register");
  };

  const { token } = useSelector((state) => state);

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>
        <Input
          label="Email"
          type="email"
          placeholder="Insira seu email principal"
          icon={FiAtSign}
          error={errors.email?.message}
          register={register}
          name="email"
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Insira sua Senha"
          icon={FiEye}
          error={errors.password?.message}
          register={register}
          name="password"
        />
        <Button
          type="submit"
          setColor="pink"
          onFunc={() => console.log("logado")}
        >
          Entrar
        </Button>
        <p>Ainda não possui uma conta?</p>
        <Button type="button" onFunc={directyRaegister}>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default Home;
