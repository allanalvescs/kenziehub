import styled from "styled-components";

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

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;

    button:nth-child(1){
        width: 160px;
    }

    button:nth-child(2){
        width: 75px;
    }
`

export const ContainerNameTech = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin: 16px 0;
    width: 100%;
    label{
        font-size: 1.5rem;
        color: var(--grey-0);
        margin-bottom: 6px;
        margin-left: 4px;
        width: 100%;
    }
    
    div{
        height: 38px;
        width: 100%;
        padding: 0px 16px;
        background-color: var(--grey-2);
        border-radius: 4px;
        flex-basis: 100%;
        display: flex;
        align-items: center;
        span{
            flex: 1;
            color: var(--grey-1);
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`