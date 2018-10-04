import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import DefaultBox from './Box'

//import logo from './logo.svg';
//import './App.css';

const Li = styled.li`
  list-style: none;
`

const Box = styled(DefaultBox)`
  margin-bottom: 20px;
  margin-top: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
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

const StyledH2 = styled.h2`
  font-size : 20px;
  font-weight : 200;  
`

const LiButton = styled.li`
  text-decoration: none;
  width: 100px;
`

const Bigdiv = styled.div`
  margin-bottom: 200px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4,1fr);
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
        <Box>
          <h2>Write A Drink Name To Know How To Make It</h2>
          <StyledInput type="text" onChange={this.drinks}/>
          <StyledButton onClick={this.search}>Search</StyledButton>
        </Box>
        {/* JSON.stringify(this.state.items) */}
        {items && items.length > 0 && <Bigdiv>{items.map(item => (
            <LiButton key={item.id}>
              <StyledLink to={"/dodrinks/" + item.idDrink}><StyledButton2>{item.strDrink}</StyledButton2></StyledLink>                        
            </LiButton>
        ))}</Bigdiv>}
      </div>
    );
  }
}

export default Drinks
