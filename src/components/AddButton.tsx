import React, { Dispatch, SetStateAction } from "react";

interface Props {
  fnc: Dispatch<SetStateAction<boolean>>;
}
const AddButton: React.FC<Props> = ({ fnc }) => (
  <button onClick={() => fnc(true)}>+</button>
);

export default AddButton;
