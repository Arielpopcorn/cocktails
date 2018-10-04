import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import SmallNavigation from '../Nav/SmallNavigation';

const Styleddiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;    
`

const Mainwrapper =styled.div`
    display: flex;
    align-items: center;
    margin: 0 60px ;
    background-color: #fafafa;
    height: 600px;
    justify-content: center;
`

const Nav = styled.div`
    /* margin-bottom: -31px;
    z-index: 1; */
`

const StyledImg = styled.img`
    height: 400px;
    width: 400px;
    padding-left: 60px;
`

const Dowrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content: center;
    padding-left: 90px;
`

const H1 = styled.h1`
    font-family: Tuna;
    font-size: 50px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 70px;
`


const Idiv = styled.div`
  display: flex;
`

const I1 = styled.dt`
    border-bottom: 1px dashed #ccc;
    width: 248px;
    text-align: left;
    padding-bottom:10px;
    margin-bottom: 20px;
    text-transform: capitalize;
    font-family: Tuna;
`

const I2 = styled.dd`
  width: 120px;
    text-align: left;
    font-size: 16px;
    font-family: Tuna;

`

const H2 = styled.h2`
    display: flex;
    align-items: center;
    text-align: center;
    width:500px;
    font-weight: 200; 
    font-size: 15px;
    font-family: Tuna;
    margin-top: 40px;

    /* padding-left: 90px; */
`

const StyledButton = styled.button`
    padding: 1px 20px;
    font-size: 18px;
    margin-bottom: 60px;
    border-radius: 3px;
    background-color: rgba(111,100,186,.5);
    font-family: Tuna;
    margin-top: 20px;
    &:hover{
    background-color: rgba(111,100,186,.6);
    transform: translateX(-3px) translateY(-2px);
    transition: transform  0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    box-shadow: 1px 2px gray;
  };
`

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 155px;
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
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
            .then(res => res.json())
            .then(json =>{
              console.log(json)
              this.setState({
                loading : false,
                item : json.drinks,
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

        const { item,drinks } = this.state 

        let ingredients =[]

        for(var i=1;i<15;i++){
            // item[0].["strIngredient" + i]
            if(item[0]["strIngredient" + i] == '' || item[0]["strIngredient" + i] == null){

            }else{

            ingredients.push({
                ingredientsName : item[0]["strIngredient" + i],
                ingredientsAmount : item[0]["strMeasure" +i]
            })}
            
        }

        return(
            <Styleddiv>
                <Nav><SmallNavigation /></Nav>
                {/* {JSON.stringify(this.state.item)} */}
                <Mainwrapper>                  
                    <StyledImg src={item[0].strDrinkThumb} />
                    <Dowrapper>
                        <H1>{item[0].strDrink}</H1>
                        {ingredients.map(theingredients => 
                        <Idiv>
                            <I1>{theingredients.ingredientsAmount}</I1><I2>{theingredients.ingredientsName}</I2>
                        </Idiv>)}
                        <H2>{item[0].strInstructions}</H2>
                        <StyledLink to={"/Cocktailsapp"}><StyledButton>More Cocktails</StyledButton></StyledLink>
                    </Dowrapper>
                </Mainwrapper>
            </Styleddiv>
        )
    }
}

export default Dodrinks