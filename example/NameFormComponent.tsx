import React from 'react';

export default class NameFormComponent extends React.PureComponent<{
  value: any; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}> {
  render() {
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" maxLength={20} {...this.props} />
      </div>
    );
  }
}
