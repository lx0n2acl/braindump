import React from "react";
import { Card, Icon, Divider } from "antd";
import IntentionTags from "./IntentionTags";

const { Meta } = Card;

const deleteNote = id => {
  console.log("delete ", id);
};
const NoteCard = props => {
  return (
    <Card
      size="small"
      className="notecard"
      actionStyle="notecard-actions"
      hoverable
      title={props.title}
      style={{ width: 300 }}
      actions={[<Icon type="setting" key="setting" />, <Icon type="edit" key="edit" />, <Icon type="delete" onClick={e => deleteNote(props.id)} key="ellipsis" />]}
    >
      <p>{props.description}</p>
      <Divider />
      <IntentionTags></IntentionTags>
    </Card>
  );
};

export default NoteCard;
