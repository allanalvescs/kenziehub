import { Box, Modal } from "@mui/material";
import { FiX } from "react-icons/fi";

import {
  ContainerTitleModal,
  StyleModal,
  ContainerButtons,
  ContainerNameTech,
} from "./style";

import { useForm } from "react-hook-form";

import Select from "../Select";
import Button from "../Button";

import {
  deleteTechThunk,
  updatedTechThunk,
} from "../../store/modules/TechsUser/thunk";
import { useDispatch, useSelector } from "react-redux";

function ModalUpdateTechs({ open, setOpenUpdateModal }) {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const { techTarget } = useSelector((state) => state);

  const updateTech = (data) => {
    dispatch(updatedTechThunk(techTarget.id, data));
    setOpenUpdateModal(false);
  };

  const deleteTech = () => {
    dispatch(deleteTechThunk(techTarget.id));
    setOpenUpdateModal(false);
  };

  return (
    <Modal open={open} sx={StyleModal}>
      <Box>
        <ContainerTitleModal>
          <h4>Tecnologia Detalhes</h4>
          <FiX onClick={() => setOpenUpdateModal(false)} />
        </ContainerTitleModal>

        <form onSubmit={handleSubmit(updateTech)}>
          <ContainerNameTech>
            <label>Nome do projeto</label>
            <div>
              <span>{techTarget.title}</span>
            </div>
          </ContainerNameTech>

          <Select label="Status" register={register} name="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <ContainerButtons>
            <Button
              setColor="pink"
              type="submit"
              onFunc={() => console.log("updated")}
            >
              Salvar alteração
            </Button>
            <Button type="submit" onFunc={deleteTech}>
              Excluir
            </Button>
          </ContainerButtons>
        </form>
      </Box>
    </Modal>
  );
}

export default ModalUpdateTechs;
