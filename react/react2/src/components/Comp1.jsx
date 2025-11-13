import { react } from "react"
import Header from "./Header";

const Comp1 = () => {
    return (
        <>
            <Header />
            <h1>this is comp1</h1>
            <Header />

            <Header />

            <ul>
                <li style={{ color: "yellow", backgroundColor: "black", padding: "1rem" }}>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </>
    )
}

export default Comp1;