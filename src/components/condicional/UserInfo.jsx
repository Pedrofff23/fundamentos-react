import If, { Else } from "./if";
// eslint-disable-next-line
export default (props) => {
  const user = props.user || {};
  return (
    <div>
      {/* <If test={user && user.name}>
        Welcome<strong> {user.name}</strong> !
      </If>

      <If test={!user || !user.name}>
        Welcome<strong> Friend</strong> !
      </If> */}

      <If test={user && user.name}>
        Welcome<strong> {user.name}</strong> !
        <Else>
          Welcome<strong> Friend</strong> !
        </Else>
      </If>
    </div>
  );
};
