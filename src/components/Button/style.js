import styled from "styled-components";


export const Customizerbutton = styled.button`
    width: 260px;
    height: 39px;
    border-radius: 5px;
    margin: 16px 0px;
    color: var(--grey-0);
    font-weight: 600;
    background-color: ${prop => prop.setColor === "pink" ? "var(--color-primary)" : "var(--grey-1)"};
`