import React, { useState } from 'react'

const StudentForm = (props) => {

    let [studentFormData, setStudentFormData] = useState({
        name: "",
        roll: "",
        class: "",
        note: "",
        phone: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target

        setStudentFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            props.addStudent(studentFormData)
        } catch (err) {

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={studentFormData.name} name='name' type="text" placeholder='name' />
                <input onChange={handleChange} value={studentFormData.roll} name='roll' type="text" placeholder='roll no' />
                <input onChange={handleChange} value={studentFormData.class} name='class' type="text" placeholder='class' />
                <input onChange={handleChange} value={studentFormData.note} name='note' type="text" placeholder='note' />
                <input onChange={handleChange} value={studentFormData.phone} name='phone' type="text" placeholder='phone' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentForm
