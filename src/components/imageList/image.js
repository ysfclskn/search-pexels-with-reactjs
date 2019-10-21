import React, { Component } from 'react';

class Image extends Component {
constructor(props){
    super(props);
    this.imgRef = React.createRef();

    this.state ={
        spanCount : 5,
       
    }


}

componentDidMount(){

    this.imgRef.current.addEventListener('load' , ()=>{
        const spanCount = Math.round(this.imgRef.current.clientHeight / 5 + 2);
        this.setState({
            spanCount
        })
    
    })
}


render(){

    const {image} = this.props;
    
    return(
       
       
<img style={{ gridRowEnd:`span ${this.state.spanCount}`}} 
        
ref={this.imgRef} src={image.src.medium} alt={image.photographer} /> 
        
    )
}
}

export default Image;
