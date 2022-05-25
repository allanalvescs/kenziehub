import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > form{
        max-width: 370px;
        width: 296px;
        padding: 34px 18px;
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
            
        }
        p{
            color: var(--grey-1);
            font-size: 1.5rem;
            font-weight: 600;
        }

        span{
            color: var(--color-error);
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`