import React, { useState } from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'
import './ComponentStyling/WatchCardStyling.css'

const WatchCard = () => {
    const [selected, setSelected] = useState([])

    const watches = [
        { name: 'Cosmograph Daytona', image: daytona }, { name: 'Sky Dweller', image: skydweller }, { name: 'Datejust', image: datejust }, { name: 'Milgauss', image: milgauss }];

    const listWatches = watches.map((item, index) =>
        <div className="watch_list" >
            <br />
            <Button className="watch_button" key={index + 1} onClick={() => onCheckboxBtnClick(index + 1)} active={selected.includes(index + 1)}>
                <Card className="watch_card" inverse key={index + 1} >
                    <CardImgOverlay>
                        <CardTitle className="watch_title">{item.name}{index + 1}
                        </CardTitle>
                        <CardImg className="watch_image" width="10%" src={item.image} alt={item.name} />
                    </CardImgOverlay>
                </Card>
            </Button>
        </div>

    )


    const selectAll = () => {
        let num = 0
        let empty = []
        if (selected.length == watches.length) {
            setSelected(empty)
            console.log('selected is cleared: ' + selected)
            console.log(selected)
        }
        else {
            while (num < watches.length) {
                selected.push(num)
                num++
                console.log(selected)
                setSelected(selected)
            }

        }

    }

    const onCheckboxBtnClick = (input) => {
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
        setSelected([...selected]);
    }

    return (
        <div>
            <Button className="watch_select_all" color="primary" onClick={selectAll}>Select All Watches</Button>
            <br />
            {listWatches}






        </div>
    )
}

export default WatchCard