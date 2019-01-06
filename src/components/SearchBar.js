import React from 'react';

class SearchBar extends React.Component {

    state = {term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO - make sure to call the callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    onInutChange = event => {
        this.setState({ term: event.target.value });
    }

    render() {
        return(
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term}  onChange={this.onInutChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;