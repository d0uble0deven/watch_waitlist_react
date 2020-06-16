import React from 'react'
import styled from 'styled-components'
import { Card, CardImg, CardImgOverlay, Button } from 'reactstrap';


const WatchCard = (props) => {


    const WButton = styled.button`
        margin-top: 1em;
        height: 13em;
        width: 13em;
        box-shadow:  5px 1px 1px rgba(4, 4, 4, .9);
        border: rgba(26, 119, 76) 1px solid;
        border-radius: 2%;
        /* background-color: black; */
        &:hover{
        
        box-shadow: inset 2px 2px 2px rgba(4, 4, 4, .9);
        
        background-color: rgb(255, 255, 255);  
        
        }

    `

    const WCard = styled.div`
    background-color: rgba(255, 255, 255, .5);  

text-shadow: 1px 1px 1px lightgrey;

box-shadow:  5px 1px 1px rgba(4, 4, 4, .9);


`
    const WImg = styled.img`
    
    `

    const TTitle = styled.h1`
        font-size: larger;
        font-weight: bolder;
        color: rgba(26, 119, 76,.9);
        text-shadow: 1px 1px 1px rgba(4,4,4,.9);

        `


    const handleClick = e => {
        props.setSelectedWatch(e.target.id)
        console.log('WC, selectedWatch: ' + props.selectedWatch)
    }


    return (
        <WButton color='success' onClick={handleClick} id={props.name} type="submit" >

            <Card inverse id={props.name} value={props.name} >

                <WImg style={{
                    margin: '1em',
                    height: '8em',
                    width: '8em',
                    border: 'rgba(26, 119, 76) 1px solid',
                    boxShadow: '5px 1px 1px rgba(4, 4, 4, .1)',
                }}
                    src={props.image} alt={props.name} id={props.name}
                >

                </WImg>


                {/* <CardImgOverlay id={props.name} > */}
                <TTitle id={props.name} >{props.name}</TTitle>
                {/* </CardImgOverlay> */}
            </Card>
        </WButton>

    )
}

export default WatchCard