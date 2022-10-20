// import React from 'react'
import React from 'react';
import '../index.css'

export class App extends React.Component {
    
    state = { good: 0, neutral:1, bad: 0 }
    countTotalFeedback = () => {
    return    this.state.bad + this.state.good + this.state.neutral
    }

    countPositiveFeedbackPercentage = () => {
        return Math.floor(this.state.good / (this.state.bad + this.state.good + this.state.neutral) *100)

    }
    handleReviewClick = (whichBtnClicked) => {
switch(whichBtnClicked) {
case 'Good': 
this.setState((prevState) =>
    ({...prevState, 
        good: prevState.good +1
    }))
    break;
    case 'Neutral': 
this.setState((prevState) =>
    ({...prevState, 
        neutral: prevState.neutral +1
    }))
    break;
    case 'Bad': 
this.setState((prevState) =>
    ({...prevState, 
        bad: prevState.bad +1
    }))
    break;
default: 
return 0;
}



    }
    render()
   
    {
        const { good, neutral, bad,} = this.state;
        // const options = {
        //     {key: 0, label: 'Good'},
        //     {key: 1, label: 'Neutral'},
        //     {key: 2, label: 'Bad'}
        // }

        return (
            <div className='feedback'>
                <h1>Please leave feedback</h1>
            <div className='btns'>
                <button className='btn' onClick={() => this.handleReviewClick('Good')}>Good</button>
                <button className='btn' onClick={() => this.handleReviewClick('Bad')}>Bad</button>
                <button className='btn' onClick={() => this.handleReviewClick('Neutral')}>Neutral</button>
            </div>
            <h2>Statistics</h2>
            <div>
            Good: {good}
            </div>
            
            <div>
            Neutral: {neutral}
            </div>

            <div>
            Bad: {bad}
            </div>
            <div>
                Total: {this.countTotalFeedback()}
            </div>

            <div>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </div>
            </div>

)
        



}
}