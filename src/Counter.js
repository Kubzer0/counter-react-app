import React from 'react'

class Counter extends React.Component {

    state = {
        number: 0
    }

    incOneHandler() {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <button
                onClick={()=>this.incOneHandler()}
                >
                Dodaj 1
                </button>
            </div>
        )
    }
}

export default Counter