import { toast } from "react-toastify";

import {
  Container,
  ContainerCardsTech,
  ContainerSubTitle,
  ContainerTech,
  IntroductionContainer,
} from "./style";

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import CardTech from "../../components/CardTech";
import ModalTech from "../../components/ModalTech";
import ModalUpdateTechs from "../../components/ModalUpdate";

import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { addToken } from "../../store/modules/Token/action";
import { displayTechsThunk } from "../../store/modules/TechsUser/thunk";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [updateModal, setOpenUpdateModal] = useState(false);
  const [error, setError] = useState(false);

  const { token, user, techs } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear("");
    history.push("/");
    dispatch(addToken(""));
  };

  useEffect(() => {
    dispatch(displayTechsThunk());
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <header>
        <Logo />
        <Button onFunc={logout} type="button">
          Sair
        </Button>
      </header>
      <main>
        <IntroductionContainer>
          <div>
            <h1>Olá {user.name}</h1>
            <p>{user.course_module} (Introdução Front-end)</p>
          </div>
        </IntroductionContainer>
        <ContainerTech>
          <ContainerSubTitle>
            <h2>Tecnologias</h2>
            <Button onFunc={() => setOpenModal(true)}>+</Button>
          </ContainerSubTitle>

          <ContainerCardsTech>
            {techs.map(({ id, status, title }) => (
              <CardTech
                key={id}
                title={title}
                status={status}
                id={id}
                setOpenUpdateModal={setOpenUpdateModal}
              />
            ))}
          </ContainerCardsTech>
        </ContainerTech>

        <ModalTech
          open={openModal}
          setOpenModal={setOpenModal}
          setError={setError}
        />

        <ModalUpdateTechs
          open={updateModal}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      </main>
      {error && toast.error("Tecnologia já cadastrada!")}
    </Container>
  );
}

export default Dashboard;
