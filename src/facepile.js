import React from 'react';
import ReactDOM from 'react-dom';
import {
  Facepile,
  IFacepileProps,
  OverflowButtonType,
} from 'office-ui-fabric-react/lib/Facepile';
import { facepilePersonas } from './FacepileExampleData';

export interface IFacepileAddFaceExampleState {
  numberOfFaces: number;
}

class FacepileAdd extends React.Component<{name:string},{}> {

 constructor(props: {}) {
    super(props);

    this.state = {
      numberOfFaces: 0
    };
  }

render() {
    const { numberOfFaces } = this.state;
    const facepileProps: IFacepileProps = {
      personas: facepilePersonas.slice(0, numberOfFaces),
      maxDisplayablePersonas: 5,
      overflowButtonProps: {
        ariaLabel: 'More users',
        onClick: (ev: React.MouseEvent<HTMLButtonElement>) =>
          alert('overflow icon clicked')
      },
      overflowButtonType: OverflowButtonType.descriptive,
      showAddButton: true,
      addButtonProps: {
        ariaLabel: 'Add a new person',
        onClick: (ev: React.MouseEvent<HTMLButtonElement>) => this.setState({
          numberOfFaces: this.state.numberOfFaces + 1
        })
      },
      ariaDescription: 'To move through the items use left and right arrow keys.'
    };

    return (
      <Facepile {...facepileProps} />
    );
  }

}
export default FacepileAdd
