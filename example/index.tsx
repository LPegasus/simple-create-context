import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

const $div = document.createElement('div');
document.body.appendChild($div);

interface FormDataType {
  age: number; name: string;
}

class Index extends React.Component<any, { value: FormDataType }> {
  state = {
    value: { age: 11, name: 'EVA' },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormDataType) => {
    const v = e.target.value;
    this.setState(s => {
      const nextValue = { ...s.value };
      nextValue[field] = v;
      return { value: nextValue };
    });
  }

  render() {
    return (
      <Form
        formData={this.state.value}
        handleChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(<Index />, $div);
