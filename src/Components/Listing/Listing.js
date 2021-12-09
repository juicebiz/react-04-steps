import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function Listing() {

    const [records, setRecords] = useState([])
    const [form, setForm] = useState({ date: '', distance: '' })

    const handleSubmit = evt => {
        evt.preventDefault()
        //const record = new RecordModel(nanoid(), form.date, form.distance)

        const findRecord = records.find(record => record.date === form.date)
        let newRecords

        if(findRecord === undefined) {
            const record = {
                id: nanoid(),
                date: form.date,
                distance: parseInt(form.distance)
            }
            newRecords = [...records, record]
        } else {
            findRecord['distance'] += parseInt(form.distance)
            newRecords = [...records]
        }

        newRecords.sort(function(a, b) {
            return a['date'] - b['date'];
        });

        setRecords(prevRecords => newRecords)
    }


    const handleChange = evt => {
        const {name, value} = evt.target
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    const handleRemove = id => {
        setRecords(prevRecords => prevRecords.filter(record => record.id !== id))
    }

    const handleEdit = id => {
        setRecords(prevRecords => prevRecords.filter(record => record.id !== id))
    }
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>Дата (ДД.ММ.ГГ.)</label>
                <input name="date" value={form.date} onChange={handleChange} type="date" required />
                Пройдено, км
                <input name="distance" value={form.distance} onChange={handleChange} type="number" required />
                <button type="submit">Ok</button>
            </form>
            <table сlass="Listing-table">
                <thead>
                    <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено, км</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>    
                    {records.map(record => 
                        <tr key={record.id}>
                            <td>{record.date}</td>
                            <td>{record.distance}</td>
                            <td><button onClick={() => handleEdit(record.id)}>Редактировать</button></td>
                            <td><button onClick={() => handleRemove(record.id)}>Удалить</button></td>
                        </tr>)}
                </tbody>
            </table>
        </React.Fragment>    
    )
}

export default Listing
