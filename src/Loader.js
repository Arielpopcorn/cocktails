import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const Wrapdiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    height: 100%;      
`

class LoadWrapper extends React.Component{
    render(){
        return(
            <Wrapdiv>
                <Loader 
                        type="Audio"
                        color="#000"
                        height="100"	
                        width="100"
                    />
            </Wrapdiv>
        )
    }
}

export default LoadWrapper