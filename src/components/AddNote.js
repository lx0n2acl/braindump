import React from "react";
import { Input } from "antd";

const onChange = e => {
  // console.log(e);
};

const onEnter = e => {
  console.log(e.target.value);
  e.target.value = "";
};

const AddNote = props => {
  return (
    <div>
      <Input size="large" placeholder="Add note..." allowClear onChange={onChange} onPressEnter={onEnter} />
    </div>
  );
};

export default AddNote;
