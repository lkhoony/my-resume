import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/Image.css';

/*
Image Component 

- present image with src

- props

    - src : image url (default)
    - alt : alt msg of <img></img> (default)
    - width
    - height
*/
class Image extends Component{

    constructor(props){
        super(props);
    }

    handleImgError = (e)=>{
        e.target.src = 'assets/img/default.jpg'
    }

    render(){
        return(
            // <div className="imgBox"
            //     style={{
            //     "width" : this.props.width,
            //     "height" : this.props.height,
            // }}>
                <img 
                    src={this.props.src} 
                    className="img-fluid" 
                    alt={this.props.alt}  
                    onError={this.handleImgError}
                    ></img>
            // </div>
        )
    }
}

// Image.propTypes = {
//     src: PropTypes.string
// };

Image.defaultProps = {
    src : 'assets/img/default.jpg',
    width : '100%',
    // height : 200
};

export default Image;

// 예외처리