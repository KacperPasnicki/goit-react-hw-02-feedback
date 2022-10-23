// import React from 'react'
import React from 'react';
import '../index.css'
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/statistics/Statistics"
import { Section } from 'components/Section/Section';



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
case 'good': 
this.setState((state) =>
    ({ 
        good: state.good +1
    }))
    break;
    case 'neutral': 
this.setState((state) =>
    ({ 
        neutral: state.neutral +1
    }))
    break;
    case 'bad': 
this.setState((state) =>
    ({
        bad: state.bad +1
    }))
    break;
default: 
return 0;
}



    }
    render()
       {
        const { good, neutral, bad,} = this.state;
    return (
            <div className='feedback'>
              <Section title = 'title'>
              <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleReviewClick} />
              
              </Section>
             <Section title = 'title2'>
                <Statistics 
                good = {good}
                neutral ={neutral} 
                bad = {bad} 
                total = {this.countTotalFeedback()}
                positiveFeedback = {this.countPositiveFeedbackPercentage()}

                
                />

             </Section>
              
            </div> 

        )
        



}
}