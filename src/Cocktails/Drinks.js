import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

//import logo from './logo.svg';
//import './App.css';

const Li = styled.li`
  list-style: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`


const StyledInput = styled.input`
  width : 100px;
  padding : 20px 10px;
  margin : 10px;
  box-sizing: border-box;
  border: 4px solid pink;
  border-radius: 4px;
`

const StyledButton = styled.button`
  border : none;
  background-color : rgba(0,0,0,.2);
  padding : 10px;
  border-radius : 12px;
  background-color: rgba(44,33,122,0.2);
  &:hover{
    background-color: (22,22,22,.8));
    transform: translateX(-5px);
    transition: transform .1s;
    box-shadow: 1px 2px gray;
  };
`

const StyledButton2 = styled.button`
  font-size: 18px;
  border-radius : 12px;
  margin: 5px;
  background-color : rgba(284,48,39,.3);
  &:hover{
    background-color: pink;
    transform: translateX(-5px);
    transition: transform .1s;
    box-shadow: 1px 2px gray;
  };
`

const StyledH2 = styled.h2`
  font-size : 20px;
  font-weight : 200;  
`

class Drinks extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading : true,
      drinks : '',
    }
  }

  search = () =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.drinks)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(json =>{
          console.log(json)
          this.setState({
            loading : false,
            items : json.drinks, // ['drink1','drink2'] or null
          })
        })
        .catch((error) => console.log(error))
  };

  drinks = (e) =>{
    console.log(e.target.value)
    this.setState({drinks : e.target.value})
  }

  render = () => {
    const { items, drinks } = this.state

    if(items === null){
      return(
        <div>
        {drinks} doesn't exist.
        </div>
      )
    }

    return (
      <div>
        <StyledInput type="text" onChange={this.drinks}/>
        <StyledButton onClick={this.search}>Choose A Drink Name To Know How To Make It</StyledButton>
        {/* JSON.stringify(this.state.items) */}
        {items && items.map(item => (
            <Li key={item.id}>
              <StyledButton2><StyledLink to={"/dodrinks/" + item.idDrink}>{item.strDrink}</StyledLink></StyledButton2>                        
            </Li>
        ))}
      </div>
    );
  }
}

export default Drinks
