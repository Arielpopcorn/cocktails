import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

const StyledButton = styled.button`
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 18px;
    background-color: rgba(222,5,186,.2);
    &:hover{
    background-color: pink;
    transform: translateX(-5px);
    transition: transform .1s;
    box-shadow: 1px 2px gray;
  };
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Styleddiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px 90px;
    `

const Styleddiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
`

const Styleddiv3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content: center;
    padding-left: 90px;
`

const H1 = styled.h1`
    font-size: 50px;
    text-align: center;
`

const StyledImg = styled.img`
    height: 500px;
    width: 500px;
    display : flex;
    border : 10px solid pink;
    padding: 10px;
`

const H2 = styled.h2`
    display: flex;
    align-items: center;
    text-align: center;
    width:500px;
    font-weight: 200; 
    /* padding-left: 90px; */
`

const Styleddivv = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-content: center;
  justify-items: center;
  padding-top: 100px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1,1fr);
    padding-top: 20px;
    padding-bottom: 20px;
    }
`

const CLickbutton = styled.button`
  width: 200px;
  height: 95px;
  border-radius: 12px;
  margin: 2px;
  background-color: rgba(111,100,186,.3);
  font-size: 20px;
  font-weight:300;
  font-family: 'Inconsolata', monospace;
  &:hover{
    background-color: rgba(111,100,186,.5);
    font-weight: 400;
    transform: translateX(-5px);
    transition: transform .1s;
    box-shadow: 1px 2px gray;
  }
`

const Linkto = styled(Link)`
  text-decoration: none;
  color: #000;
`


class Dodrinks extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            item : null,
        }
    }

    componentDidMount = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + this.props.match.params.category)
            .then(res => res.json())
            .then(json =>{
              console.log(json)
              this.setState({
                loading : false,
                item : json.meals,
              })
            })
            .catch(console.log('error'))
      }

    render(){
        if(this.state.loading == true){
            return(
                <Loader 
                    type="Audio"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                />  
            )
        }
        const { item } = this.state 
        return(
            <Styleddivv>
                {/* {JSON.stringify(this.state.item)} */}
                {/* <Styleddiv2>
                    <H1>Here is {item[0].strDrink}</H1>
                    <StyledImg src={item[0].strDrinkThumb} />
                </Styleddiv2> */}
                {/* <h2>{this.props.match.params.category}</h2> */}

                {item.map(meals =>(
                    // <h1>{meals.strMeal}</h1>
                    // <p>{meals.strInstructions}</p>
                    <Linkto to={'/mealitself/'+meals.idMeal}><CLickbutton>{meals.strMeal}</CLickbutton></Linkto>
                ))}

                {/* <Styleddiv3>
                    <H2>{item[0].strInstructions}</H2>
                    <StyledButton ><StyledLink to={"/foodapp"}>More Food</StyledLink></StyledButton>
                </Styleddiv3> */}
            </Styleddivv>
        )
    }
}

export default Dodrinks