

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) =>
{
    const feedbackArray = 
    [
        [1, `Good: ${good}`],
        [2, `Neutral: ${neutral}`],
        [3, `Bad: ${bad}`],
        [4, `Total: ${total}`],
        [5, `Positive feedback: ${positiveFeedback}% `]
    ];
    return (
        <ul>
          {feedbackArray.map(([id, element]) => (
            <li key={id} >
              <span>
                {element}</span>
            </li>))}
      </ul>
    );       
}