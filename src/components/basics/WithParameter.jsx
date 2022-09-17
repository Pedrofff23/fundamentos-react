export default function WithParameter(props) {
    const status = props.grade >= 7 ? 'Approved' : 'In recuperation'
    const gradeInt = Math.ceil(props.grade)
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
             {props.student}
             has grade 
             <p> { gradeInt } </p>
             and is
             <strong> { status } </strong>
            
            </p> 
        </div>
    )
}