import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    margin: 8px 0;
    
    label{
        font-size: 1.5rem;
        color: var(--grey-0);
        margin-bottom: 6px;
        margin-left: 4px;
        width: 100%;
    }
    select{
        background-color: var(--grey-2);
        height: 38px;
        width: 100%;
        padding: 0px 16px;
        width: 100%;
        color: var(--grey-1);
        border-radius: 4px;
    }
`