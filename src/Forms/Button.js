import styled from 'styled-components'

const Button = styled.button`
  border: none;
  padding: 13px 20px 14px 20px; 
  border-radius: 0 4px 4px 0;
  font-size: 15px;
  background-color: rgba(44,33,122,0.2);
  font-family: 'Inconsolata', monospace;
  transition: all 0.2s;
  &:focus {
      outline: 0;
  }
  &:hover{
    /* background-color: (22,22,22,.8)); */
    transform: translateX(-1px);
    box-shadow: 1px 2px rgba(0,0,0,.3);
  }; 
`

export default Button

    
// class Button extends React.Component {

//     render(){
//         const { prop1, prop2 } = this.props
//         return <div></div>
//     }
// }
// --------------------------------------
// const someOtherFunc = () => {
//     console.log('helo')
// }

// const Button ({ prop1, prop2 }) =>
//     <div>{someOtherFunc()}</div>
