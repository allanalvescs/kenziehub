import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--grey-4);
    color: var(--grey-0);
    width: 92%;
    height: 48px;
    border-radius: 6px;
    transition: all 2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 28px;
    margin: 12px;

    &:hover{
        background-color: var(--grey-2);
        cursor: pointer;
        
        p{
            color: var(--grey-0);
        }
    }

    h3{
        font-size: 2rem;
        color: var(--grey-0);
    }
    
    p{
        color: var(--grey-1);
        font-size: 1.2rem;
        font-weight: 600;
    }
`