import React from 'react';
import createContext from '../es';

// Theme context, default to light theme
const ThemeContext = createContext('dark');

// Signed-in user context
const UserContext = createContext({
  name: 'Guest',
  age: 1,
});

export default class App extends React.Component<{ signedInUser: { name: string; age: number; }; theme: string; }> {
  render() {
    const { signedInUser, theme } = this.props;

    // App component that provides initial context values
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Content />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

function ProfilePage({ user, theme }) {
  return (
    <div style={theme === 'light' ? { color: '#999', backgroundColor: '#fefefe' } : { color: '#fff', backgroundColor: '#333' }}>
      <div><label>User.Name: </label><span>{user.name}</span></div>
      <div><label>User.Age: </label><span>{user.age}</span></div>
    </div>
  );
}