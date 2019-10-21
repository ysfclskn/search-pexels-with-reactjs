import React , {Component} from 'react';
import SearchBar from './SearchBar/searchbar';
import ImageList from './imageList/imageList';
import axios from 'axios';
class App extends Component{

    state = {
        images: []
    }
    onSearchImage = async (search) => {
        console.log('App:'+search);

        const result = await axios.get("https://api.pexels.com/v1/search" , 
        {
                params : {
                    query: search,
                    per_page: 15,
                    page: 1
                },

                headers :{
                    Authorization: '563492ad6f917000010000016528de9f9798446687c9fa1f3b586c07'

                }
        })
      
            console.log(result);

            this.setState({
                images : result.data.photos
            })
            console.log(this.state.images[0].src);

    }

   
render(){
    
    return(
        <div >
           <SearchBar onSearchImage={this.onSearchImage} />
            {this.state.images.length} images founded.
     

          
          <ImageList images={this.state.images} />
         
        </div>
    )
}
}

export default App;