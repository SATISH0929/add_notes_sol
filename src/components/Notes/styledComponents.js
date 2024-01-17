// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    @media screen and (min-width: 768px){
        flex-direction: column;
    }
`

export const Heading = styled.h1`
    font-size: 25px;
    font-family: 'Bree Serif';
    color: #4c63b6;
    margin-bottom: 30px;
`

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    box-shadow: 0px 0px 4px 4px #aab8c8;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
`

export const Input = styled.input`
    width: 100%;
    font-family: 'Roboto';
    border: none;
    outline: none;
    font-size: 15px;
    margin-top: 10px;
`

export const InputTextArea = styled.textarea`
    border: none;
    outline: none;
    font-size: 15px;
    margin-top: 10px;
`

export const Button = styled.button`
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 15px;
    background-color: #4c63b6;
    font-family: 'Roboto';
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    align-self: flex-end;
    cursor: pointer;
`

export const ItemListContainer = styled.ul`
    list-style-type: none;
    width: 90%;
    display: flex;
    align-item: flex-start;
    flex-wrap: wrap;

    
`

export const NoNotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
`

export const NotesHeading = styled.h1`
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: 500;
    color: #1e293b;
`

export const Paragraph = styled.p`
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: 500;
    color: #334155;
`
