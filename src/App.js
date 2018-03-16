import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

import { initializeIcons } from '@uifabric/icons';

import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

import Search from './search';
//import DataList from './datalist';
class App extends React.Component {
  constructor(props) {
        super(props);

    this.state = { showPanel: false };
  }
  render() {

    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
         <DefaultButton
                  description='Opens the Sample Panel'
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={ () => this.setState({ showPanel: true }) }
                  text='Open Panel' />
                   <Panel
              isOpen={ this.state.showPanel }
              onDismiss={ this._setShowPanel(false) }
              type={ PanelType.medium }
              headerText='Medium Panel'>
              <span>Content goes here.</span>
            </Panel>
         <Search />
          <Card name="Tags Card" />
          <Card name="Tags Card" /> 
          <Card name="Tags Card" />      

          
        </div>
          
    );
  }
  _setShowPanel(showPanel: boolean): () => void {
          return (): void => {
            this.setState({ showPanel });
          };
        }
}

export default App;



