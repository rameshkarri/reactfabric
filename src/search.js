import React from 'react';
import ReactDOM from 'react-dom';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';

// tslint:disable:jsx-no-lambda
class SearchInputBox extends React.Component<any, any> {
  render() {
    return (
      <div className='ms-SearchBoxSmallExample ms-lg2'>
        <SearchBox
          placeholder='Search'
          onEscape={ (ev) => {
            console.log('Custom onEscape Called');
          } }
          onClear={ (ev) => {
            console.log('Custom onClear Called');
          } }
          onChange={ (newValue) => console.log('SearchBox onChange fired: ' + newValue) }
          onSearch={ (newValue) => console.log('SearchBox onSearch fired: ' + newValue) }
          onFocus={ () => console.log('onFocus called') }
          onBlur={ () => console.log('onBlur called') }
        />
      </div>
    );
  }

}
export default SearchInputBox;