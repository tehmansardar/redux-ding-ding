import React, {useState} from 'react'

const Home = ({changeName,name}) => {
    const [state, setState] = useState({name:'Temi'})

    const onChange = ()=>{
        changeName(state.name)
    }

    return (
        <div>
            <h1>Home of {name.name}</h1>
            <button onClick={onChange}>Change</button>
        </div>
    )
}

export default Home
