import React from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'

const WatchCard = () => {

    const watches = [
        { name: 'Cosmograph Daytona', image: daytona }, { name: 'Sky Dweller', image: skydweller }, { name: 'Datejust', image: datejust }, { name: 'Milgauss', image: milgauss }];

    const listWatches = watches.map((item, index) =>
        <Card inverse key={index} >
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
                <CardImg width="10%" src={item.image} alt={item.name} />
            </CardImgOverlay>
        </Card>

    )

    return (
        <div>
            {listWatches}






        </div>
    )
}

export default WatchCard