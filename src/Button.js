import React from 'react';
import ReactDOM from 'react-dom';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from '@uifabric/icons';

import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

initializeIcons();

initializeIcons('https://my.cdn.com/path/to/icons/');


class Button extends React.Component<{name:string},{}> {
	 showPanel: boolean;
	 constructor(props) {
		        super(props);
		 		this.state = { showPanel: false };
		 	}

	render(){
		const { disabled, checked } = this.props;		
		return(
			<Fabric>
			    <DefaultButton
			     description='Opens the Sample Panel'
			            primary={ true }
			            data-automation-id='test'
			            disabled={ disabled }
			            checked={ checked }
			            text={this.props.name}			         
			             onClick={ () => this.setState({ showPanel: true }) }
			          />

 			</Fabric>
			)
	}
	 // _alertClicked(): void {
	 //    alert('Clicked');
	 //  }
}

export default Button
