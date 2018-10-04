import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import styled from '../../node_modules/styled-components';
import cuisineImg from '../images/cuisine.svg'
import Cuisine from '../images/cuisine.js'
import SmallNavigation from '../Nav/SmallNavigation'

const Maindiv = styled.div`
    margin: 0;
    display: block;
`

const Smallicon = styled.div`
    color: #000;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    font-size: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RecipeWrapper = styled.div`
    margin-top: -100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    background-color:fafafa;
    margin-bottom: 40px;
`

const Worddiv = styled.div`
    text-align: center;
`


const Outsidediv = styled.div`
    display: flex;
    flex-direction: column;
    
`

const RecipeImgWrapper = styled.div`
    width: 510px;
    height: 470px;
    margin-top: 40px;
    /* margin-top: -80px; */
    position: relative;
    z-index: 1;
    /* align-self: flex-end; */
`

const IngredientsWrapper = styled.div`
    width: 510px;
    min-height: 300px;
    height: auto;
    text-align: center;
    background-color: #f4f4f3;
    /* margin-top: -130px; */
    margin-right: -10px;
    /* align-self: flex-start; */
`

const StyledH1 = styled.h1`
    font-size: 40px;
    margin-bottom: 0px;
    padding-top: 103px;
    margin-top: -82px;
    `

const Styledimg = styled.img`
    width: 500px;
    height: 500px;
`

const Linkback = styled(Link)`
    text-decoration: none;
    width: 10px;
`

const Buttonback = styled.button`
    padding: 12px 20px;
    font-size: 18px;
    margin-bottom: 60px;
    border-radius: 3px;
    background-color: rgba(111,100,186,.5);
    font-family: 'Slabo 27px';
    &:hover{
    background-color: rgba(111,100,186,.6);
    transform: translateX(-3px) translateY(-2px);
    transition: transform  0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 1px 2px gray;
  };
`

const Titlediv = styled.div`
    height: 500px;
    background-color:#fafafa;
`

const HH1 = styled.h1`
    text-align: center;
    margin: 170px auto 20px;
    width: 500px;
    font-family: 'Slabo 27px';
    font-weight: 200;
    font-size: 42px;
`

const Middleh1= styled.h1`
    font-size: 15px;
    width:120px;
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: 38px;

`

const CuisineWrapper = styled.div`
    width: 30px;
    margin-right: 5px;
`

const I1 = styled.dt`
    width: 120px;
    text-align: left;
    font-size: 16px;
    font-family: 'Slabo 27px';

`
const I2 = styled.dd`
    border-bottom: 1px dashed #ccc;
    width: 248px;
    text-align: left;
    padding-bottom:10px;
    margin-bottom: 20px;
    text-transform: capitalize;
    font-family: 'Slabo 27px';
`

const Idiv = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top:17px;
`

const InstructionsWrapper = styled.div`
  background-color: #fafafa;
  height: auto;
  min-height: 400px;
  font-family: 'Slabo 27px';
  text-align: center;
`

const Instructions = styled.div`
  font-family: 'Slabo 27px';
  margin: auto 300px;
  padding-bottom: 55px;
  line-height: 2em;
`
const Nav = styled.nav`
  color: #000;
`


class Mealitself extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            item : null,
        }
    }

    componentDidMount = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.mealnumber)
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

        const {item} = this.state
        let ingredients = []
        let measure = []

        for(var i=1;i<21;i++){
            if(item[0]["strIngredient" + i] === "" || item[0]["strIngredient" + i] == null){
                
            }else{
                console.log(item[0]["strIngredient" + i])
                ingredients.push({
                    ingredientName: item[0]["strIngredient" + i],
                    measureAmount: item[0]["strMeasure"+i]
                })
            }

        }
                    // {item.map(meals => (
            //     <p>{meals.strIngredient[i]}:{meals.strMeasure[i]}</p>
            // ))}

        return(
            <Maindiv>
                    <Outsidediv>
                           <Titlediv>
                            <SmallNavigation />
                            <HH1>{item[0].strMeal}</HH1>
                            <Smallicon><CuisineWrapper><Cuisine color={'black'} /></CuisineWrapper>{item[0].strArea} Cuisine</Smallicon>
                        </Titlediv>


                   <RecipeWrapper> 
                        <RecipeImgWrapper>                       
                            <Styledimg src={item[0].strMealThumb} />
                        </RecipeImgWrapper>
                    
                        <IngredientsWrapper>
                            <Middleh1>INGREDIENTS</Middleh1>

                            {ingredients.map(theingredient => 
                                <Idiv>
                                    <I1>{theingredient.measureAmount}</I1><I2>{theingredient.ingredientName}</I2>
                                </Idiv>)}
                        </IngredientsWrapper>
                    </RecipeWrapper>
                    {/* {item.map(meals => (
                        <p>{meals.strIngredient1}:{meals.strMeasure1}</p>
                    ))} */}
                    </Outsidediv>
                    <InstructionsWrapper>
                        <Worddiv>
                            <StyledH1>Instructions:</StyledH1>
                        </Worddiv>
                        <Instructions>
                            <p>{item[0].strInstructions}</p>
                        </Instructions>                        
                        <Linkback to={`/category/${item[0].strCategory}`}><Buttonback>More {item[0].strCategory}</Buttonback></Linkback>
                    </InstructionsWrapper>
                    
            </Maindiv>
        )
    }
}

export default Mealitself
