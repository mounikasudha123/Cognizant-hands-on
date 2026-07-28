import '../stylesheets/myStyle.css';

function CalculateScore({ Name, School, total, goal }) {
  const average = goal !== 0 ? total / goal : 0;

  return (
    <div className="formatstyle">
      <h1>Student Details :</h1>
      <p className="name">Name: <span>{Name}</span></p>
      <p className="school">School: <span>{School}</span></p>
      <p className="total">Total: <span>{total}</span></p>
      <p className="score">Goal: <span>{goal}</span></p>
      <p className="score">Score: <span>{average}</span></p>
    </div>
  );
}

export default CalculateScore;
