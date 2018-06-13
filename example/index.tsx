import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import ConsumingMultipleContexts from './ConsumingMultipleContexts';

const $div = document.createElement('div');
document.body.appendChild($div);

interface FormDataType {
  age: number; name: string;
}

class Index extends React.Component<any, { value: FormDataType; theme: string }> {
  state = {
    value: { age: 11, name: 'EVA' },
    theme: 'light',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormDataType) => {
    const v = e.target.value;
    this.setState(s => {
      const nextState = { ...s };
      const nextValue = { ...s.value };
      nextValue[field] = v;
      nextState.value = nextValue;
      return nextState;
    });
  }

  handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    this.setState(s => {
      return { ...s, theme: !checked ? 'dark' : 'light' };
    });
  }

  render() {
    return (
      <div>
        <h2>Dynamic Context</h2>
        <Form
          formData={this.state.value}
          handleChange={this.handleChange}
        />
        <a href="https://reactjs.org/docs/context.html#consuming-multiple-contexts" target="_blank">
          <h2>Consuming Multiple Contexts</h2>
        </a> use light theme: <input type="checkbox" checked={this.state.theme === 'light'} onChange={this.handleChangeTheme} />
        <ConsumingMultipleContexts signedInUser={this.state.value} theme={this.state.theme} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, $div);
