import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TableWrapper } from './tableWrapper';

class Table extends Component {
  state = {
    items: this.props.items,
    inputs: {},
  };

  renderLabel = function (labels) {
    if (this.isUndefined(labels)) return;
    return labels.map((label, index) => <th key={index}>{label}</th>);
  };

  renderItems = function (items) {
    if (this.isUndefined(items)) return;
    const propNames = this.getPropName(items);

    return items.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        {propNames.map((propName, i) => (
          <td key={i}>
            {this.renderInput(
              propName,
              `${propName}${index}`,
              item[propName],
              item
            )}
          </td>
        ))}
      </tr>
    ));
  };

  renderInput = (propName, inputName, val, item) => {
    const inputStatus = this.state.inputs[inputName];
    if (inputStatus)
      return (
        <input
          type="text"
          name={propName}
          value={val}
          onChange={(e) => this.handleChange(e, item)}
          onBlur={() => this.enableInput(inputName)}
        />
      );
    return <p onClick={() => this.enableInput(inputName)}>{val}</p>;
  };

  enableInput = (inputName) => {
    const inputs = { ...this.state.inputs };
    inputs[inputName] = !inputs[inputName];
    this.setState({ inputs });
  };

  handleChange = (e, item) => {
    const items = [...this.state.items];
    const index = items.findIndex((i) => i === item);
    items[index][e.target.name] = e.target.value;
    this.setState({ items });
  };

  getPropName = (items) => {
    if (this.isUndefined(items)) return;
    return Object.keys(items[0]);
  };

  isUndefined = (obj) => {
    return typeof obj === 'undefined';
  };

  render() {
    const { items, labels } = this.props;
    return (
      <TableWrapper>
        <thead>
          <tr>{this.renderLabel(labels)}</tr>
        </thead>
        <tbody>{this.renderItems(items)}</tbody>
      </TableWrapper>
    );
  }
}

Table.propTypes = {
  labels: PropTypes.PropTypes.array.isRequired,
  items: PropTypes.PropTypes.array.isRequired,
};

// Table.defaultProps = {};
export default Table;
