
// import '../index.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) =>
 {
 
return (<ul>
    {options.map(data => (
    <li key={data}><button onClick={() => onLeaveFeedback(data)}>
        {data}</button></li>))}

</ul>

)
    }

