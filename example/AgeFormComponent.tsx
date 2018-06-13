import * as React from 'react';

export default class AgeFormComponent extends React.PureComponent<{
  value: any; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}> {
  render() {
    return (
      <div>
        <label htmlFor="age">Age:</label>
        <input id="age" name="age" type="number" max="100" min="1" {...this.props} />
      </div>
    );
  }
}
