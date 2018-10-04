import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.nav`
    float: right;
    display: flex;
    margin-top: 50px;
    margin-right: 136px;
`
const StyledH1 = styled.h1`
    font-family: 'Slabo 27px';
    font-size: 20px; 
`
const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 14px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-family: 'Slabo 27px';
`
const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: 
    list-style: none;
    background-color: rgba(111,100,186,.5);
    height: 30px;
    width: 90px;
    margin-right: 5px;
    border-radius: 2px;
    &:hover{
        background-color: rgba(111,100,186,.6);
    }
`


class SmallNavigation extends React.Component{
    render(){
        return(
            <Container>
                <StyledH1>Eat or Drink?</StyledH1>
                <NavList>
                    <Li><StyledLink to={"/cocktailsapp"}>Cocktails</StyledLink></Li>
                    <Li><StyledLink to={"/Foodapp"}>Food</StyledLink></Li>
                </NavList>
            </Container>
        )
    }
}

export default SmallNavigation