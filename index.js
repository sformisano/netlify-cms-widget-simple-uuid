import { v1 as uuidv1 } from 'uuid';

const IdControl = createClass({
  componentDidMount: function () {
    const value = this.props.value ? this.props.value : uuidv1();
    this.props.onChange(value)
  },

  handleChange: function(e) {
    this.props.onChange(e.target.value.trim());
  },

  render: function() {
    return h('input', {
      type: 'text',
      disabled: 'disabled',
      value: this.props.value,
      onChange: this.handleChange,
      className: this.props.classNameWrapper
    });
  }
});

const IdPreview = createClass({
  render: function() {
    return h('p', {}, this.props.value);
  }
});

export default { IdControl, IdPreview };
