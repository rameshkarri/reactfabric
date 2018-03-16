import React from 'react';
import ReactDOM from 'react-dom';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './card.css';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import Clock from './clock';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

import { WithContext as ReactTags } from 'react-tag-input';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';

import { initializeIcons } from '@uifabric/icons';


import Spinner from './spinner';

initializeIcons();

initializeIcons('https://my.cdn.com/path/to/icons/');

class Card extends React.Component<{name:string},{}> {

	 showPanel: boolean;


constructor(props) {
        super(props);

 		this.state = { showPanel: false };

        this.state = {
            tags: [{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
            suggestions: ['USA', 'Germany', 'Austria', 'Costa Rica', 'Sri Lanka', 'Thailand']
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
 
    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
 
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});        
    }
 
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;
 
        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: tags });
    }
 
	render(){
		const { disabled, checked } = this.props;

 		const { tags, suggestions } = this.state;

 		const cellEditProps = {
	      mode: 'click'
	    };

	    var products = this.state.tags;

		return(
			<Fabric>
			    <div className="card ms-Grid-col ms-sm3">
			      <h4>{this.props.name}</h4>
			      			<ProgressIndicator />
			      			<Spinner />
	       				   <div>
			                	<ReactTags tags={tags}
				                    suggestions={suggestions}
				                    handleDelete={this.handleDelete}
				                    handleAddition={this.handleAddition}
				                    handleDrag={this.handleDrag} />				                     
			            	</div>			          		
						    <Clock />

						    <div className="ms-Grid-col ms-sm12 ms-md12">			    
							    <BootstrapTable data={ products } cellEdit={ cellEditProps }>
							          <TableHeaderColumn dataField='id' isKey> ID </TableHeaderColumn>
							          <TableHeaderColumn dataField='text'> Name </TableHeaderColumn>
						    	</BootstrapTable>
		    				</div>
			    </div>
			    
			 
			  </Fabric>
			)
		}

  
 
			
}
  
export default Card


