import React from 'react'

const DisplayGrid = (props) => {
    return (
        <div>
            {props.studentData.map((student) => {
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

export default DisplayGrid
