import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: flex;  
    align-items: center;
    flex-direction: column;
    > form{
        max-width: 370px;
        width: 296px;
        padding: 12px;
        margin: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--grey-3);
        border-radius: 6px;

        h2{
            color: var(--grey-0);
            font-size: 2.1rem;
            text-align: center;
            margin-bottom: 24px;
            
        }

        p{
            color: var(--grey-1);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 12px;
        }

        div{
            border: none;
            width: 100%;
        }
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 148px;
    width: 100%;

    button{
        width: 90px;
        height: 25px;
        background-color:var(--grey-3);
        margin: 0;
        margin-left: 48px;
        padding: 0px 16px;
    }
`