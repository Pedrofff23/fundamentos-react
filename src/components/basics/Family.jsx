import React, { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}
      {/* OR */}
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

//                  EXEMPLO FAZENDO NA MAO
/* <FamilyMember nome="Pedro" surname={props.surname} />
<FamilyMember nome="Luan" {...props} />
<FamilyMember nome="Julia" surname="Braga" /> */
