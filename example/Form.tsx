import * as React from 'react';
import AgeFormComponent from './AgeFormComponent';
import NameFormComponent from './NameFormComponent';
import { FormProvider, FormConsumer } from './Context';

export default class Form extends React.PureComponent<{
  formData: { age: number; name: any; };
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>, field: any) => void;
}> {
  handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleChange(e, 'age');
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleChange(e, 'name');
  }

  render() {
    return (
      <div>
        <form action="" target="_self">
          <FormProvider value={this.props.formData}>
            <FormConsumer>
              {formData => <AgeFormComponent value={formData.age} onChange={this.handleAgeChange} />}
            </FormConsumer>
            <FormConsumer>
              {formData => <NameFormComponent value={formData.name} onChange={this.handleNameChange} />}
            </FormConsumer>
            <button type="submit">submit</button>
          </FormProvider>
        </form>
        <FormConsumer>
          {formData => <AgeFormComponent disabled value={formData.age} onChange={this.handleAgeChange} />}
        </FormConsumer>
        <FormConsumer>
          {formData => <NameFormComponent disabled value={formData.name} onChange={this.handleNameChange} />}
        </FormConsumer>
      </div>
    )
  }
}
