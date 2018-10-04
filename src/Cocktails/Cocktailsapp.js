import React from 'react'
import styled from 'styled-components'

import Drinks from './Drinks.js'
import Ingredients from './Ingredients.js'
import Navigation from '../Nav/Navigation.js'

// const Nav = styled.nav`
//     background-color: rgba(0,0,0,.3);
//     height: 48px;
//     width: 170px;
//     position: fixed;
//     top: 120px;
//     left: 108px;
//     border-radius: 12px;
    
//     &:hover{
//         height: 480px;
//         background-color: rgba(0,0,0,.5);
//         /* transition-duration: .3s;
//         transition-delay: .2s; */
//         transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
//     };
// `


const Styleddiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    padding-top: 74px;
`

const Ul = styled.ul`
    padding-left: 0;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    width: 100%;
    margin: 0;
    height: 100%;
    align-items: center;
`

const Li = styled.li`
    list-style : none;
`

const H1 = styled.h1`
    font-size : 40px;
    text-align : center;
    font-family: 'Slabo 27px';
    margin: 0;
    padding: 20px;
    width: 600px;
    margin: 124px auto 0;
`

const Styleddivbox = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
`

const Nav = styled.div`
    margin-right: -70px;
    position: relative;
    z-index: 1;
`

// const Styledsvg = styled.svg`
//     position: fixed;
//     left: 0;
//     bottom: 0;
// `

class Cocktailsapp extends React.Component{
    render(){
        return(
            <Styleddiv>
                    <Nav><Navigation /></Nav>
                <Ul>
                    <H1>Ｗhat Drink Do You Want to make?</H1>
                    <Styleddivbox>
                        <Li><Drinks /></Li>
                        <Li><Ingredients /></Li>
                    </Styleddivbox>

                    {/* <Styledsvg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="grey">
                            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" 
                                values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"
                                /> 
                        </path>
                    </Styledsvg> */}
                </Ul>
                
            </Styleddiv>
        )
    }
}

export default Cocktailsapp