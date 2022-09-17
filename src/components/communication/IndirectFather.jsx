import IndirectSon from "./IndirectSon";

function sendInfo(name, age, nerd) {
  console.log(name, age, nerd);
}

export default (props) => {
  return (
    <div>
      <div>Pai</div>
      <IndirectSon clicked={sendInfo}></IndirectSon>
    </div>
  );
};
