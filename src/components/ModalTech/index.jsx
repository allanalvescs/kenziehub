import { StyleModal, ContainerTitleModal } from "./style";
import { Box, Modal } from "@mui/material";
import { FiX } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import api from "../../Services/api";

import { useDispatch, useSelector } from "react-redux";
import { displayTechs } from "../../store/modules/TechsUser/action";
import {addTechThunk} from "../../store/modules/TechsUser/thunk";

function ModalTech({ open, setOpenModal, setError }) {
  const Schema = yup.object().shape({
    title: yup.string().required("campo obrigatório! *"),
    status: yup.string().required("campo obrigatório! *"),
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const { user } = useSelector((state) => state);

  const handleAddTech = (data) => {
    dispatch(addTechThunk(data, setError));
    
    setOpenModal(false);
    api
      .get(`/users/${user.id}`)
      .then((resp) => dispatch(displayTechs(resp.data.techs)));
  };
  return (
    <>
      <Modal open={open} sx={StyleModal}>
        <Box>
          <ContainerTitleModal>
            <h4>Cadastrar Tecnologia</h4>
            <FiX onClick={() => setOpenModal(false)} />
          </ContainerTitleModal>

          <form onSubmit={handleSubmit(handleAddTech)}>
            <Input
              label="Nome"
              placeholder="nome da tecnologia"
              icon={false}
              register={register}
              name="title"
              error={errors.title?.message}
            />
            <Select label="Selecionar status" register={register} name="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>

            <Button
              setColor="pink"
              type="submit"
              onFunc={() => console.log("Cadastrado")}
            >
              Cadastrar Tecnologia
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default ModalTech;
