import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Box from './Box'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  /* &:hover {
    color: pink;
  } */
`


const StyledButton2 = styled.button`
  height: 80px;
  font-size: 18px;
  width: 112px;
  border-radius : 5px;
  margin: 5px;
  background-color: rgba(44,33,122,0.1);
  font-family: 'Ubuntu Condensed', sans-serif;
  &:hover{
    /* transform: translateX(-5px);
    transition: transform .1s;
    box-shadow: 1px 2px gray; */
    background-color: rgba(44,33,122,0.2);
  };
  `

const StyledInput = styled.input`
  width : 100px;
  height:0px;
  padding : 20px 10px;
  margin : 10px;
  box-sizing: border-box;
  border: 2px solid rgb(0,0,0,0.2);
  border-radius: 4px;
`

const StyledButton = styled.button`
  border : none;
  padding : 12px 20px;; 
  border-radius : 4px;
  font-size: 15px;
  background-color: rgba(44,33,122,0.2);
  font-family: 'Inconsolata', monospace;
  &:hover{
    /* background-color: (22,22,22,.8)); */
    transform: translateX(-1px);
    transition: transform .1s;
    box-shadow: 1px 2px rgba(0,0,0,.3);
  }; 
`

const LiButton = styled.li`
  text-decoration: none;
  width: 100px;
`

const Bigdiv = styled.div`
  margin-bottom: 200px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3,1fr);
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
          <Box>
          <h2>Write A Ingredient To Know How To Make It</h2>
          <StyledInput type="text" onChange={this.ingredients}/>
          <StyledButton onClick={this.search}>Search</StyledButton>
          </Box>
        {/* JSON.stringify(this.state.items) */}
        <Bigdiv>{items.map(item => (
            <LiButton key={item.id}>
                <StyledLink to={"/dodrinks/" + item.idDrink}><StyledButton2>{item.strDrink}</StyledButton2></StyledLink>                       
            </LiButton>
        ))}</Bigdiv>
      </div>
    );
  }
}

export default Ingredients