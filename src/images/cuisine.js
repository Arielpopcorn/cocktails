import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
    fill: ${({ color}) => color ? color : "#fff"};
`

class Cuisine extends React.Component {
    render() {
        return <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90" color={this.props.color}>
            <path d="M50 26c-2.216 0-4 1.784-4 4v1.219A37.246 37.246 0 0 1 50 31c1.351 0 2.686.077 4 .219V30c0-2.216-1.784-4-4-4zm0 7c-19.33 0-35 15.67-35 35h70c0-19.33-15.67-35-35-35zM6 70v4h88v-4H6z" overflow="visible" color="#cccccc"/>
        </SVG>
    }
}

export default Cuisine