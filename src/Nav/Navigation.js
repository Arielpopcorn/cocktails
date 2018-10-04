import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.nav`
    float: left;
    margin-top: 80px; 
    margin-left: 40px;
`

const StyledH1 = styled.h1`
    font-family: Tuna;
    font-size: 20px; 
    width: 150px;
` 

const Navlist = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
`

const Li = styled.li`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    height: 50px;
    align-items: center;
    background-color: rgba(111,100,186,.5);
    border-radius: 2px;
    margin-bottom: 2px; 
        &:hover{
            background-color: rgba(111,100,186,.6);
            transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
        };
`

const StyledLink = styled(Link)`
    color: #000;
    font-family: Tuna;
    text-decoration: none;
`



class Navigation extends React.Component{
    render(){
        return(
            <Container>
                <StyledH1>Eat or Drink?</StyledH1>
                <Navlist>
                    <Li><StyledLink to={"/cocktailsapp"}>Cocktails</StyledLink></Li>
                    <Li><StyledLink to={"/Foodapp"}>Food</StyledLink></Li>
                </Navlist>
            </Container>
        )
    }
}

export default Navigation