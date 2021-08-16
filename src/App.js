import './App.css';
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'
import {AmplifyAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
Amplify.configure(awsConfig)

function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
     <h1>Welcome to Amplify</h1>
    </div>
    <AmplifySignOut></AmplifySignOut>
    </AmplifyAuthenticator>
  );
}

export default App;
