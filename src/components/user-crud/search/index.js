import React, { Component } from 'react';
import { debounce} from 'lodash';
let timeoutSearch;
class Search extends Component {
    render() {
        return (
            <div>
                Search <input type="text"
                    onChange={this._handleChange}
                    className="form-control mb-3"></input>
            </div>
        );
    }
    _handleChange = (e) => {
        // timeoutSearch && clearTimeout(timeoutSearch);
        // timeoutSearch = setTimeout(() => {
        //     this.props._setFilterString(e.target.value);
            
        // },300);
        timeoutSearch && timeoutSearch.cancel();
        timeoutSearch = debounce(() => this.props._setFilterString.target.value, 3000);
        timeoutSearch();
    }
}

export default Search;