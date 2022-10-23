

import FeedbackCss from './Feedback.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) =>
 {
 
return (<ul className={FeedbackCss.btns}>
    {options.map(data => (
    <li  key={data}><button className={FeedbackCss.btn} onClick={() => onLeaveFeedback(data)}>
        {data}</button></li>))}

</ul>

)
    }

