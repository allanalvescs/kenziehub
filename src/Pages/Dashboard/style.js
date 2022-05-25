import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            width: 55px;
            height: 32px;
            margin-left: 96px;
            background-color: var(--grey-3);
        }

        @media screen and (min-width: 768px){
            justify-content: space-around;
        }
    }

    main{
        width: 100%;
    }
`

export const IntroductionContainer = styled.div`
    height: 130px;
    border-top: solid 2px var(--grey-3);
    border-bottom: solid 2px var(--grey-3);
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
    > div{  
        width: 300px;
        h1{
            font-size: 2.1rem;
            margin-bottom: 10px;
            color: var(--grey-0);
            text-align: start;
            width: 210px;
        }  
        p{
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--grey-1);
        }

        @media screen and (min-width: 768px){
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            h1{
                width: 168px;
                font-size: 2rem;
            }
        }
    }
`

export const ContainerTech = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 780px;
    margin: 26px auto;
    padding: 12px;
`

export const ContainerSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 2rem;
        color: var(--grey-0);
    }

    button{
        width: 32px;
        height: 32px;
        font-size: 2rem;
        font-weight: 600;
        background-color: var(--grey-3);
    }
`

export const ContainerCardsTech = styled.div`
    max-height: 416px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-3);
    border-radius: 6px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: hidden;
        width: 1px;
        border-radius: 6px;
    }

    > div{
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
        }

        p{
            color: var(--grey-1);
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`

export const ContainerTitleModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
    height: 40px;
    background-color: var(--grey-2);

    h4{
        color: var(--grey-0);
        font-size: 1.5rem;
        font-weight: 600;
    }

    svg{
        color: var(--grey-0);
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export const StyleModal = {
    width: "294px",
    height: "300px",
    backgroundColor: "#212529",
    color: "#fff",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    div: {
        border: "none",
    },

    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--grey-3)",

        div: {
            width: "90%"
        }
    }
};