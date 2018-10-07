import styled from 'styled-components'

const Input = styled.input`
  width: 150px;
  height: 0px;
  padding: 20px 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 4px 0 0 4px;
  &:focus {
      outline: 0;
      border: 2px solid rgba(0,0,0,0.3);
  }
  @media (max-width: 600px) {
      width: auto;
    }


`

export default Input