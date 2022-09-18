
// eslint-disable-next-line
export default (props) => {
  const cb = props.clicked;
  const randomAge = () => parseInt(Math.random() * (20)) + 50
  const randomNerd = () => Math.random() > 0.5

  return (
    <div>
      <div>Son</div>
      <button onClick={(_) => cb("Joao", randomAge(), randomNerd())}>Send info</button>
    </div>
  );
};
