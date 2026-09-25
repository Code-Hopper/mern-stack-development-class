import { react, useState, createContext, Children, useContext } from "react"

const StudentContext = createContext()

const StudentProvider = ({ children }) => {

    let [studentData, setStudentData] = useState([])

    function addStudent(student) {
        setStudentData((prev) => [...prev, student])
    }

    return (
        <StudentContext.Provider value={{ studentData, addStudent }}>
            {children}
        </StudentContext.Provider>
    )
}

let useStudent = () => useContext(StudentContext)

export { StudentProvider, useStudent }
