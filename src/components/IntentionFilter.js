import React from "react";
import { Tag, Divider } from "antd";

const { CheckableTag } = Tag;

const intentions = ["Movies", "Books", "Music", "Sports"];

class IntentionFilter extends React.Component {
  state = {
    selectedTags: []
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        <Divider />
        <h2>Intentions</h2>
        <Divider />
        <ul style={{ listStyle: "none" }}>
          {intentions.map(tag => (
            <li>
              <CheckableTag key={tag} checked={selectedTags.indexOf(tag) > -1} onChange={checked => this.handleChange(tag, checked)}>
                {tag}
              </CheckableTag>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default IntentionFilter;
