import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'
import './ComponentStyling/WatchCardStyling.css'

const WatchCard = () => {
    const [selected, setSelected] = useState([])
    const [name, setName] = useState('')

    const watches = [
        { name: 'Cosmograph Daytona', image: daytona }, { name: 'Sky Dweller', image: skydweller }, { name: 'Datejust', image: datejust }, { name: 'Milgauss', image: milgauss }];

    const listWatches = watches.map((item, index) =>
        <div className="watch_list" >
            <br />
            <Button className="watch_button" key={index} onClick={() => onWatchClick(item.name)} active={selected.includes(index)}>
                <Card className="watch_card" inverse key={index} >
                    <CardImgOverlay>
                        <CardTitle className="watch_title">{item.name}
                        </CardTitle>
                        <CardImg className="watch_image" width="10%" src={item.image} alt={item.name} />
                    </CardImgOverlay>
                </Card>
            </Button>
        </div>

    )

    const onWatchClick = (input) => {

        console.log(`onWatchClick is firing ${input}`)
        console.log(selected)
        // filter selected for input 
        // if arr.length == 0, the push input
        // else remove element

        const filterInput = selected.filter(element => element === input)

        if (filterInput) {
            selected.push(input)
        } else {
            // deselecting does not work correctly
            setSelected(selected)
        }
        // if (selected.filter(element => element === input)) {
        //     selected.push(input)
        // } else {
        //     // find repeated element and remove it
        //     const deselectedWatch = selected.filter(element => element == input)
        //     console.log(deselectedWatch)
        //     setSelected(deselectedWatch)


        // }

        /*
        // finds index of input in state array
        const index = selected.indexOf(input);
        // does not matter what the first number is, "if" refers to index position
        if (index < 0) {
            // pushes the button value in to array
            selected.push(input);
        } else {
            //deselects by finding index of number in state[], 
            //and removes one space aka the number itself
            selected.splice(index, 1);
        }
        */
        setSelected([...selected]);
    }

    return (
        <div> {}
            {listWatches}






        </div>
    )
}

export default WatchCard