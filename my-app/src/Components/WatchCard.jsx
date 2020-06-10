import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import './ComponentStyling/WatchCardStyling.css'


const WatchCard = (props) => {

    const handleClick = e => {
        props.setSelectedWatch(e.target.id)
        console.log('WC, selectedWatch: ' + props.selectedWatch)
    }


    return (
        <Button className="watch_button" color='success' onClick={handleClick} id={props.name} type="submit" >

            <Card className="watch_card" inverse id={props.name} value={props.name} >

                <CardImg className="watch_image" width="10%" src={props.image} alt={props.name} id={props.name} />

                <CardImgOverlay id={props.name} >

                    <CardTitle className="watch_title" id={props.name} >{props.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Button>

    )
}

export default WatchCard