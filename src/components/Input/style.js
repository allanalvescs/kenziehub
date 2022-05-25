import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin: 16px 0;
    label{
        font-size: 1.5rem;
        color: var(--grey-0);
        margin-bottom: 6px;
        margin-left: 4px;
        width: 100%;

        display: flex;
        justify-content: space-between;

        span{
            font-weight: 500;
            color: var(--color-error);
        }
    }

    > div{
        flex: 1;
        height: 38px;
        width: 100%;
        padding: 0px 16px;
        background-color: var(--grey-2);
        border: solid 2px var(--grey-0);
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    input{
        background: transparent;
        color: var(--grey-0);
        &::placeholder{
            color: var(--grey-1);
        }
    }


    svg{
        color: var(--grey-1);
        font-size: 1.5rem;
    }
`