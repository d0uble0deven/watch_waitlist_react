import React, { useState, useEffect } from 'react'
import axios from 'axios'


const TestHooks = () => {
    // state
    const [data, setData] = useState([])
    const [id, setId] = useState(0)
    const [message, setMessage] = useState('')
    const [intervalIsSet, setIntervalIsSet] = useState(false)
    const [idToDelete, setIdToDelete] = useState(null)
    const [idToUpdate, setIdToUpdate] = useState(null)
    const [objectToUpdate, setObjectToUpdate] = useState(null)

    // hooks
    useEffect(() => {
        // getDataFromDb()
        // if (!intervalIsSet) {
        //     let interval = setInterval(getDataFromDb(), 10000)
        //     setIntervalIsSet({ intervalIsSet: interval })
        // }
    })

    useEffect(() => {
        // if (intervalIsSet) {
        //     clearInterval(intervalIsSet)
        //     setIntervalIsSet(null)
        // }
    })



    // CRUD functions
    const getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => setData(res.data))
    }

    const putDataToDb = (message) => {
        //logic for settup an id
        let currentIds = data.map(item => item.id)
        let idToBeAdded = 0
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded
        }
        axios.post('http://localhost:3001/api/putData', {
            id: idToBeAdded,
            message: message
        })
    }

    const deleteFromDb = (idToDelete) => {
        parseInt(idToDelete)
        let objIdToDelete = null
        data.forEach(item => {
            if (item.id == idToDelete) {
                objIdToDelete = item.id
            }
        })
        // issue is with this axios call
        axios.delete('http://localhost:3001/api/deleteData',
            { data: { id: objIdToDelete } })
            .then(response => response.data)
            .catch((error) => {
                throw error.response.data
            })
    }

    const updateDb = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null
        parseInt(idToUpdate)
        data.forEach(item => {
            if (item.id == idToUpdate) {
                objIdToUpdate = item._id
            }
        })

        axios.post('http://localhost:3001/api/updateData', {
            id: objIdToUpdate,
            update: { message: updateToApply }
        })
    }


    return (
        <div>
            TestHooks
            <ul>
                {10 <= 0
                    ? 'NO DATA' :
                    data.map((item) => (
                        <li style={{ padding: '10px' }} key={item.id}>
                            <span style={{ color: 'gray' }}> id: </span> {item.id}
                            <br />
                            <span style={{ color: 'gray' }}> data: </span> {item.message}
                        </li>
                    ))
                }
            </ul>

            <div><button onClick={() => getDataFromDb()}>REFRESH</button></div>

            <div style={{ padding: '10px' }}>
                <input type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="add something in the database" style={{ width: '200px' }}
                />
                <button onClick={() => putDataToDb(message)}>ADD</button>
            </div>

            <div style={{ padding: '10px' }}>
                <input type="text" placeholder="put id of item to update here" style={{ width: '200px' }} onChange={(e) => setIdToUpdate(e.target.value)}
                />
                <input type="text" placeholder="put new value of the item here" style={{ width: '200px' }}
                    onChange={(e) => setObjectToUpdate(e.target.value)}
                />
                <button onClick={() => updateDb(idToUpdate, objectToUpdate)}>UPDATE</button>
            </div>

            <div style={{ padding: '10px' }}>
                <input type="text" placeholder="put id of item to delete here" style={{ width: '200px' }}
                    onChange={(e) => setIdToDelete(e.target.value)}
                />
                <button onClick={() => deleteFromDb(idToDelete)}>DELETE</button>
            </div>
        </div>
    )


}


export default TestHooks