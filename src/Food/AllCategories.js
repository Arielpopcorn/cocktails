import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

//import logo from './logo.svg';
//import './App.css';

const Bigdiv = styled.div`
  margin-bottom: 200px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  /* justify-items: center;
  align-content: center; */
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const StyledButton2 = styled.button`
  text-align: center;
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



class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading : true,
    }
  }

  componentDidMount = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(json =>{
          console.log(json)
          this.setState({
            loading : false,
            items : json.meals, // ['drink1','drink2'] or null
          })
        })
        .catch((error) => console.log(error))
  };

//   meals = (e) =>{
//     console.log(e.target.value)
//     this.setState({meals : e.target.value})
//   }

  render = () => {
    const { items, meals } = this.state

    // if(items === null){
    //   return(
    //     <div>
    //     {meals} doesn't exist.
    //     </div>
    //   )
    // }

    return (
      <Bigdiv>
        {/* <StyledInput type="text" onChange={this.drinks}/> */}
        {/* <StyledButton onClick={this.search}>Choose A Drink Name To Know How To Make It</StyledButton> */}
        {/* JSON.stringify(this.state.items) */}
        {items.map(meals =>(
              <StyledButton2><StyledLink to={'/category/' + meals.strCategory}>{meals.strCategory}</StyledLink></StyledButton2>
        ))}
      </Bigdiv>
    );
  }
}

export default Category
