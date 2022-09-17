export default (props) => {
    const cb = props.clicked
  return (
    <div>
      <div>Son</div>
      <button onClick={_ => cb("Joao", 54, false)}>
        Send info
      </button>
    </div>
  );
};
