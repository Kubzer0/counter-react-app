import React from 'react'

class Counter extends React.Component {

    state = (
        JSON.parse(localStorage.getItem('counter-state'))
        || 
        {
            number: this.props.initialValue
        }
    )

    componentDidUpdate() {
        this.saveToLocalStorage()
    }

    saveToLocalStorage() {
        localStorage.setItem('counter-state', JSON.stringify(this.state))
    }

    incByOneHandler() {
        this.setState({ number: this.state.number + 1 })
    }
    incByFiveHandler() {
        this.setState({ number: this.state.number + 5 })
    }
    decByOneHandler() {
        this.setState({ number: this.state.number - 1 })
    }
    decByFiveHandler() {
        this.setState({ number: this.state.number - 5 })
    }
    resetCounter() {
        this.setState({ number: this.props.initialValue })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.number}
                </div>
                <button
                    onClick={() => this.incByOneHandler()}
                >
                    Dodaj 1
                </button>
                <button
                    onClick={() => this.incByFiveHandler()}
                >
                    Dodaj 5
                </button>
                <button
                    onClick={() => this.decByOneHandler()}
                >
                    Odejmij 1
                </button>
                <button
                    onClick={() => this.decByFiveHandler()}
                >
                    Odejmij 5
                </button>
                <button
                    onClick={() => this.resetCounter()}
                >
                    Zresetuj licznik
                </button>

            </div>

        )
    }
}

export default Counter