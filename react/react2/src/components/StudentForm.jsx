import React, { useState, useEffect } from 'react'

import { useStudent } from '../context/StudentContext'

const StudentForm = () => {

    let { studentData, addStudent } = useStudent()

    let [studentFormData, setStudentFormData] = useState({
        name: "",
        roll: "",
        class: "",
        note: "",
        phone: ""
    })


    useEffect(() => {
        alert(studentData.name + " has been added to list !")
    },
        [studentData]
    )

    const handleChange = (e) => {
        let { name, value } = e.target

        setStudentFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            addStudent(studentFormData)
        } catch (err) {

        }
    }

    return (
        <div>
            <form className='flex gap-2 justify- items-' onSubmit={handleSubmit}>
                <input className='m-lg-[100px] p-lg-[100px] m-32' onChange={handleChange} value={studentFormData.name} name='name' type="text" placeholder='name' />
                <input className='' onChange={handleChange} value={studentFormData.roll} name='roll' type="text" placeholder='roll no' />
                <input onChange={handleChange} value={studentFormData.class} name='class' type="text" placeholder='class' />
                <input onChange={handleChange} value={studentFormData.note} name='note' type="text" placeholder='note' />
                <input onChange={handleChange} value={studentFormData.phone} name='phone' type="text" placeholder='phone' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentForm


// classname-reponsive-value{predefined/[custom]}
// ms/ps me/pe mt/pt mb/pb mx/px my/py
// classname(border)-s/e/t/b-value([custom])