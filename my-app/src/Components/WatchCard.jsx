import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'
import './ComponentStyling/WatchCardStyling.css'


const WatchCard = (props) => {

    const [selected, setSelected] = useState([])
    const [name, setName] = useState('')





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
        <div>

            <div className="watch_list" key={props.index} >
                <br />
                <Button className="watch_button" onClick={() => onWatchClick(props.name)} >
                    <Card className="watch_card" inverse >
                        <CardImgOverlay>
                            <CardTitle className="watch_title">{props.name}
                            </CardTitle>
                            <CardImg className="watch_image" width="10%" src={props.image} alt={props.name} />
                        </CardImgOverlay>
                    </Card>
                </Button>
            </div>








        </div>
    )
}

export default WatchCard