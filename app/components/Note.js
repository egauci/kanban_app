/* eslint no-invalid-this: 0 */
import React, {Component, PropTypes} from 'react';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  static propTypes = {
    task: PropTypes.string.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit();
    }
    return this.renderNote();
  }

  renderEdit = () => (
    <input type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  )

  renderNote = () => (
    <div onClick={this.edit}>
      <span className="task">{this.props.task}</span>
      {this.props.onDelete ? this.renderDelete() : null}
    </div>
  )

  renderDelete = () => (
    <button className="delete" onClick={this.props.onDelete}>x</button>
  )

  edit = () => {
    this.setState({
      editing: true
    });
  }

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    if (this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }
    this.setState({
      editing: false
    });
  }
}
