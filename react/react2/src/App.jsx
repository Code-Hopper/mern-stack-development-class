import { react } from "react"

import "./components/styles/style.scss"

import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import Comp3 from "./components/Comp3"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {

    return (
        <>
            <Header />
            <h1 style={{
                color: "red",
                background: "black"
            }}>this is some heading</h1>
            <h2>
                this is some 2nd heading
            </h2>
            <Comp1 />
            {/* <Comp1 /> */}
            <Comp2 />
            <Comp3 />
            <Footer />
        </>
    )
}

export default App;

// Assembly point

// style

// inline-css, external-css, sass, bootstrap, tailwind