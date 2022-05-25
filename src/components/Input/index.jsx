import { Container } from "./style";

function Input({ label, icon: Icon, register, name, error, ...rest }) {
  return (
    <Container>
      <label>
        {label} <span>{error}</span>
      </label>
      <div>
        <input {...rest} {...register(name)} />
        {Icon && <Icon />}
      </div>
    </Container>
  );
}

export default Input;
