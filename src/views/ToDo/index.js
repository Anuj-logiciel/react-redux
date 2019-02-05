import React from 'react'
import {Link} from 'react-router-dom'
class Todo extends React.Component {
    componentDidMount() {
        console.log('anuj singh')
    }
    render() {
        return <h1>Hi <Link to="/listing">ToDo</Link></h1>
    }
}

export default Todo