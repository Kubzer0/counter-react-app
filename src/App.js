import React from 'react'

import Counter from './Counter'


class App extends React.Component {
  render() {
    return (
      <Counter
      initialValue={0}
      />
    )
  }
}

export default App
