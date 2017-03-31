import React from 'react';
import catInvalid from '../images/cat-complete.png';
const { func, string } = React.PropTypes;

/* ValidateInput is a component that displays error
 * after focus has left on element is left if props validate
 * function does not return true */
class ValidateInput extends React.Component {

  static propTypes = {
    validate: func.isRequired,
    placeholder: string.isRequired,
    type: string.isRequired,
  }

  defaultProps = {
    type: 'text',
  }

  state = { text: '', invalid: false }

  onTextChanged = (event) => {
    const text = event.target.value;
    const nextState = { text };
    /* change state.text */
    /* and validate text, if it is valid set state.invalid:false*/
  }

  onBlur= () => {
    /* on blur validate text and set state invalid:true if it is not valid */
  }

  render() {
    const { text, invalid } = this.state;
    const { type } = this.props;
    return (
      <div className="validate-input-container">
        <input
          type={type}
          placeholder={this.props.placeholder}
          className={invalid ? 'invalid-input' : 'input-default'}
          onChange={this.onTextChanged}
          value={text}
          onBlur={this.onBlur}
        />
        <img className={invalid ? 'invalid-indicator-visible' : 'invalid-indicator-hidden'} src={catInvalid} />
      </div>
    );
  }


}

const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
const form = () => (
  <div>
    <h1>{this.state.header}</h1>
    <ValidateInput validate={text => emailRegex.test(text)} type="email" placeholder="email" />
    <ValidateInput validate={text => text.length > 8} type="password" placeholder="password" />
  </div>
    );

export default form;

