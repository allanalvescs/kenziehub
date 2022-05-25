import { useDispatch, useSelector } from "react-redux";
import { targetTech } from "../../store/modules/TechTarget/actions";
import { Container } from "./style";

function CardTech({ title, status, id, setOpenUpdateModal }) {
  const dispatch = useDispatch();
  const { techs } = useSelector((state) => state);
  return (
    <Container
      onClick={() => {
        setOpenUpdateModal(true);
        const findTech = techs.find((tech) => tech.id === id);
        dispatch(targetTech(findTech));
      }}
    >
      <h3>{title}</h3>
      <p>{status}</p>
    </Container>
  );
}

export default CardTech;
