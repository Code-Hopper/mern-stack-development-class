import React from 'react'

import { useStudent } from '../context/StudentContext'

const Grid = () => {

    let { studentData } = useStudent()

    console.log(studentData)

    return (
        <div>
            {studentData.map((student) => {
                return (
                    <div>
                        name: {student.name}
                        phone: {student.phone}
                        note: {student.note}
                        class: {student.class}
                        roll: {student.roll}
                    </div>
                )
            })}
        </div>
    )
}

export default Grid
