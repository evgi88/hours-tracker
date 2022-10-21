import React from 'react'; 

const CurrentDate = () => {
  return(
    <div>
      <h3>Today's date: {Date()}</h3>
    </div>
  )
}

export class Calendar extends React.Component {
  render() {
    return(
      <div>
        <CurrentDate />
      </div>
    )
  }
}
