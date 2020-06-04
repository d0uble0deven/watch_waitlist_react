import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'
import './ComponentStyling/WatchCardStyling.css'


const WatchCard = (props) => {

    const handleClick = e => console.log('id of watch button/image: ' + e.target.id)


    return (
        <div>

            <div className="watch_list" key={props.index} >
                <br />
                <Button className="watch_button" value={props.name} id={props.id} onClick={handleClick}>
                    <Card className="watch_card" inverse >
                        <CardTitle className="watch_title">{props.name}</CardTitle>
                        <CardImg className="watch_image" width="10%" src={props.image} alt={props.name} id={props.id} />
                    </Card>
                </Button>
            </div>








        </div>
    )
}

export default WatchCard