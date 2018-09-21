import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  /* &:hover {
    color: pink;
  } */
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

class Ingredients extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading : true,
      ingredient: ''
    }
  }

  search = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.state.ingredient)
        .then(res => res.json())
        .then(json =>{
          this.setState({
            loading : false,
            items : json.drinks,
          })
        })
        .catch(e => {
          this.setState({
            loading : false,
            items : null,
          })
          console.log(e)
        })
  };
  
  ingredients = e => {
    this.setState({ingredient: e.target.value})
  }
  render() {
    const { items } = this.state
    if(items === null){
      return(
        <div>{this.state.ingredient} doesn't exist.</div>
      )
    }

    console.log(items)
    return (
      <div>
        <StyledInput type="text" onChange={this.ingredients}/>
        <StyledButton onClick={this.search}>Choose A Ingredient To Know How To Make It</StyledButton>
        {/* JSON.stringify(this.state.items) */}
        {items.map(item => (
            <li key={item.id}>
                <StyledButton2><StyledLink to={"/dodrinks/" + item.idDrink}>{item.strDrink}</StyledLink></StyledButton2>                       
            </li>
        ))}
      </div>
    );
  }
}

export default Ingredients