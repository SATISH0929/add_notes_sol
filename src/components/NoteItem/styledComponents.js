// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
    padding: 10px;
    width: 100%;
    border: 1px solid #cbd5e1;

    @media screen and (min-width: 768px){
        width: 300px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: 'Roboto';
    color: '#1e293b';
`

export const Notes = styled.p`
    font-size: 18px;
    font-family: 'Roboto';
    color: '#475569';
`
