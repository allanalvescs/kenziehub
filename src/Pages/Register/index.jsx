import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Select from "../../components/Select";

import { Container, Header } from "./style";
import { FiUser, FiEyeOff, FiAtSign } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import api from "../../Services/api";

function Register() {
  const Schema = yup.object().shape({
    name: yup.string().required("campo obrigatório! *"),
    email: yup
      .string()
      .email("campo invalido! formato de email *")
      .required("campo obrigatório! *"),
    bio: yup.string().required("campo obrigatório! *"),
    contact: yup.string().required("campo obrigatório! *"),
    password: yup
      .string()
      .required("campo obrigatório! *")
      .min(6, "minimo de 6 caracteres"),
    Confirmpassword: yup
      .string()
      .required("campo obrigatório! *")
      .min(6, "minimo de 6 caracteres")
      .oneOf([yup.ref("password")], "senha diferente!"),
    course_module: yup.string().required("selecione um módulo!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const history = useHistory();

  const registerUser = (data) => {
    api
      .post("/users", data)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Header>
        <Logo />
        <Button onFunc={() => history.push("/")}>voltar</Button>
      </Header>

      <form onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>

        <p>Rapido e grátis, vamos nessa</p>

        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          register={register}
          name="name"
          icon={FiUser}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register}
          name="email"
          icon={FiAtSign}
          error={errors.email?.message}
        />
        <Input
          label="Bio"
          type="text"
          placeholder="Escreva aqui sua bio"
          register={register}
          icon={FiUser}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          label="Contato"
          type="text"
          placeholder="Telefone,Linkedin,Instagram,Facebook"
          register={register}
          icon={FiUser}
          name="contact"
          error={errors.contact?.message}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          register={register}
          name="password"
          icon={FiEyeOff}
          error={errors.password?.message}
        />
        <Input
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme aqui sua senha"
          register={register}
          name="Confirmpassword"
          icon={FiEyeOff}
          error={errors.Confirmpassword?.message}
        />
        <Select
          label="Selecionar módulos"
          register={register}
          name="course_module"
          error={errors.course_module?.message}
        >
          <option value="primeiro modulo">primeiro modulo</option>
          <option value="segundo modulo">segundo modulo</option>
          <option value="terceiro modulo">terceiro modulo</option>
          <option value="quarto modulo">quarto modulo</option>
          <option value="quinto modulo">quinto modulo</option>
          <option value="sexto modulo">sexto modulo</option>
        </Select>

        <Button type="submit" onFunc={() => console.log("cadastrado")}>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default Register;
