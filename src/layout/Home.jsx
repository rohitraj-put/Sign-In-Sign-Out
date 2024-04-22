import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const urlNavigate = useNavigate()

    const clickHandler = () => {
        urlNavigate('/')
        localStorage.clear()
        window.location.reload()


    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                Home Page
            </h1>
            <button onClick={clickHandler}>Log Out</button>
        </div>
    )
}

export default Home