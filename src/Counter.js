import React from 'react'

class Counter extends React.Component{

    state = {
        number: 0
    }

    incHandler(){
        this.setState({number: this.state.number -1})
    }

    render(){
        return(
            <div>
                {this.state.number}
            </div>
        )
    }
}

export default Counter