import { Customizerbutton } from "./style";

function Button({ children, onFunc, setColor, type }) {
  return (
    <Customizerbutton onClick={() => onFunc()} setColor={setColor} type={type}>
      {children}
    </Customizerbutton>
  );
}

export default Button;
