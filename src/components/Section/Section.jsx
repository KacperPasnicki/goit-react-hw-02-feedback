import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/statistics/Statistics"

export const Section = (title, children) => {
    
    
    return <>
    
        <h1>{title}</h1>
       {children}
    </>
    }