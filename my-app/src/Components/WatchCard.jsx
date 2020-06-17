import React from 'react'
import styled from 'styled-components'
import { Card, CardImg, CardImgOverlay, Button } from 'reactstrap';


const WatchCard = (props) => {



    const WButton = styled.button`
        height: 13em;
        width: 10em;
        box-shadow:  5px 5px 1px rgba(4, 4, 4, .9);
        border: rgba(26, 119, 76) 1px solid;
        border-radius: 2%;
        background-color: rgb(255, 255, 255);  
        margin: 2em;


        

        &:hover{
        box-shadow: inset 2px 2px 2px rgba(4, 4, 4, .9);
        background-color: rgba(26, 119, 76);
        
        }


        `

    const WImg = styled.img`
        height: 9em;
        width: 9em;
        border-radius: 2%;
    
        `

    const WTitle = styled.h1`
        font-size: larger;
        font-weight: bolder;
        color: rgba(173, 135, 2, .6);
        text-shadow: 1px 1px 1px rgba(255,255,255,.9);

        `



    const handleClick = e => {
        props.setSelectedWatch(e.target.id)
        console.log('WC, selectedWatch: ' + props.selectedWatch)
    }


    return (
        <WButton color='success' onClick={handleClick} id={props.name} type="submit" >
            <WImg src={props.image} alt={props.name} id={props.name} />

            <WTitle id={props.name} >{props.name}</WTitle>
        </WButton>
    )
}

export default WatchCard