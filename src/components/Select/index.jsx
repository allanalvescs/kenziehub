import { Container } from "./style";

function Select({ label,children, register, name }) {
  return (
    <Container>
      <label>{label}</label>
      <select {...register(name)}>{children}</select>
    </Container>
  );
}

export default Select;
