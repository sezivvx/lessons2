import React, { useState } from 'react'
import Buttons from "../../components/buttons/Buttons"
import User from "../user/User"
import Example from "../../components/example/Example"
import Header from "../../components/header/Header"
import Modal from "../../components/modal/Modal"
import Input from '../../components/input/Input'
import List from '../../components/list/List'

const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас']
    const tasks = [
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ]

    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleShow = () => {
        setShow(!show)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <React.Fragment>
                {show &&
                    <Modal handleShow={handleShow} onChange={handleChange} inputValue>
                        <h1>Modal</h1>
                    </Modal>
                }
                <Buttons />
                <button onClick={handleShow}>Открыть</button>
                <Header navBar={navBar} />
                <User name={'Bakyt'} age={18} />
                <User name={'Kuban'} age={30} />
                <User name={'Ermek'} age={10} />
                <Input />
                <Example>
                    <p style={{ color: 'red', fontSize: '20px' }}>User</p>
                    <p>Age</p>
                </Example>
                <input />
                <List tasks={tasks} />
            </React.Fragment>
        </div>
    )
}

export default MainPage