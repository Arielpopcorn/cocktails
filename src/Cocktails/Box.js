import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
    width: 800px;
    margin: 0 auto 0;
    @media (max-width: 1100px) {
        flex-direction: column;
        height: auto;
        width: 300px;
    }
`

export default Box
