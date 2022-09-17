// eslint-disable-next-line
export default (props) => {

  const { min, max } = props;

  const ramdom = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Random Value</h2>
      <p>
        <strong>Min Value: </strong> {min}
      </p>
      <p>
        <strong>Max Value: </strong> {max}
      </p>
      <p>
        <strong>Choosed Value: </strong> {ramdom}
      </p>
    </div>
  );
};
