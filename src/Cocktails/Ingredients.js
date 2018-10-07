import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Box from './Box'
import DefaultInput from '../Forms/Input'
import Button from '../Forms/Button'


const Input = styled(DefaultInput)`
  margin-left: 10px;
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


const LiButton = styled.li`
  text-decoration: none;
  width: 150px;
`

const Bigdiv = styled.div`
  margin-bottom: 200px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3,1fr);
  @media (max-width: 900px) {
        grid-template-columns: repeat(3,1fr);
        margin-bottom: 20px;
    }
  @media (max-width: 600px) {
        grid-template-columns: repeat(2,1fr);
        margin-bottom: 20px;
        margin-top: 20px;
    }
`

const Form = styled.form`

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


  search = (e) => {
    e.preventDefault()
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
            items : [],
            error: true
          })
          console.log(e)
        })
  };
  
  ingredients = e => {
    this.setState({
      ingredient: e.target.value,
      error: false
    })
  }
  render() {
    const { items, error } = this.state

  //   if(items === null) {
  //     return <div>
  //     {this.state.ingredient} doesn't exist.
  // </div>: "" }

  //   }

    


    console.log(items)
    return (
      <div>
          <Box>
          <h2>Write A Ingredient To Know How To Make It</h2>
          <Form onSubmit={this.search}>
            <Input type="text" onChange={this.ingredients}/>
            <Button>Search</Button>
          </Form>
          </Box>
        {/* JSON.stringify(this.state.items) */}

        {error === true ? 
          <div>
            {this.state.ingredient} doesn't exist.
          </div>: "" 
        }
            
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