import * as React from 'react';
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';

export class SimpleSpinner extends React.Component<any, any> {
  render() {
    return (
      <div className='ms-BasicSpinnersExample'>
        
        <Spinner size={ SpinnerSize.large } label='loading...' ariaLive='assertive' />
      </div>
    );
  }
}
export default SimpleSpinner;