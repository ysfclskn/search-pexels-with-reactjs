import React , {Component} from 'react';
import './searchBar.css';

class SearchBar extends Component {
    state = {
        search : '' 

    }
    inputChanged =(event) =>{
        this.setState({
            search : event.target.value
        }) }

    clickSearchImage = () =>{
       this.props.onSearchImage(this.state.search);
    }

    
 render(){
        return (
            <div>
                <div className=" ui category search">
                    <div className="ui icon input search-bar-container">
                        <input  className="prompt" 
                                type="text" 
                                placeholder="Search images..."
                                onChange={this.inputChanged} 
                                onKeyPress={(e) => {
                                    if(e.key === 'Enter'){this.clickSearchImage()}
                                }}
                                />

                        <button className="ui icon button" id="btn" 
                                onClick={this.clickSearchImage}
                               > 
                        <i className="search icon" ></i>
                        </button>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
            )
        }
}

export default SearchBar;