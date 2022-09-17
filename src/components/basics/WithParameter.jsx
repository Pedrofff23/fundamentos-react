export default function WithParameter(props) {
    const status = props.grade >= 7 ? 'Approved' : 'In recuperation'
    const gradeInt = Math.ceil(props.grade)
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
             {props.student}
            <br /> has grade 
             <span> { gradeInt } </span>
             and is
             <strong> { status } </strong>
            
            </p> 
        </div>
    )
}