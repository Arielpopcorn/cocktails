import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import DefaultInput from '../Forms/Input'
import Button from '../Forms/Button'
import DefaultBox from './Box'

//import logo from './logo.svg';
//import './App.css';

const Input = styled(DefaultInput)`
  margin-left: 10px;
`

const Box = styled(DefaultBox)`
  margin-bottom: 20px;
  margin-top: 20px;
  /* @media (max-width: 600px) {
        margin-bottom: 0;
    } */
`

const Li = styled.li`
  list-style: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const StyledButton2 = styled.button`
  height: 77px;
  font-size: 14px;
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
  width: 150px;
`

const Bigdiv = styled.div`
  margin-bottom: 200px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4,1fr);
  @media (max-width: 900px) {
        grid-template-columns: repeat(3,1fr);
        margin-bottom: 20px;
    }
  @media (max-width: 600px) {
      grid-template-columns: repeat(2,1fr);
      margin-bottom: 20px;
  }
`

const Form = styled.form`
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

  search = (e) =>{
    e.preventDefault()
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.state.drinks)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(json =>{
          if(json.drinks === null) {
            this.setState({
              items: [],
              error:true,
            })
          } else {
            this.setState({
              loading : false,
              items : json.drinks, // ['drink1','drink2'] or null
            })
          }
          
        })
        .catch((error) => {
          this.setState({
            items: [],
            error:true,
          })
          console.log(error)})
  };

  drinks = (e) =>{
    console.log(e.target.value)
    this.setState({
      drinks : e.target.value,
      error:false
    })
    
  }

  render = () => {
    const { items, drinks, error } = this.state

    return (
      <div>
        <Box>
          <h2>Write A Drink Name To Know How To Make It</h2>
          <Form onSubmit={this.search}>
            <Input type="text" onChange={this.drinks}/>
            <Button>Search</Button>
          </Form>
        </Box>
        {/* JSON.stringify(this.state.items) */}

        {error == true ? 
          <div>
          {drinks} doesn't exist.
          </div> : ''}

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
