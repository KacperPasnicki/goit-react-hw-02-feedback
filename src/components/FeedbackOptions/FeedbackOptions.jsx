
// import '../index.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) =>
 {
const btnsList = options.map(data => {
return(<ul>
    <li key={data}><button onClick={() => onLeaveFeedback(data)}>{data}</button></li>

</ul>

)
}
   
    )
 }
    
