import React from 'react'
import styled from 'styled-components'

import Drinks from './Drinks.js'
import Ingredients from './Ingredients.js'

const Styleddiv = styled.div`
    /* background-color : black;
    height : 1000px; */
`

const Ul = styled.ul`
    margin : 80px 200px;
    background-color : rgba(0,255,255,0.2);
    height : 100%;
`

const Li = styled.li`
    list-style : none;
    text-align : center; 
`

const H1 = styled.h1`
    font-size : 40px;
    text-align : center;
`

class Cocktailsapp extends React.Component{
    render(){
        return(
            <Styleddiv>
                <Ul>
                    <H1>Ｗhich Drink Do You Want to make?</H1>
                    <Li><Drinks href="#">Drinks</Drinks></Li>
                    <Li><Ingredients href="#">Ingredients</Ingredients></Li>
                </Ul>
            </Styleddiv>
        )
    }
}

export default Cocktailsapp