import React, {Component} from 'react';
import '../css/PortfolioBox.css';

/*
Portfolio Component

- Present Portfolio 

- props

    - title : app name
    - subtitle : description of app
    - main : src of main img
*/

class Portfolio extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-lg-4 col-md-6 portfolio-item filter-app ">
                <div className="portfolio-wrap">
                    {/* <Image width={this.props.width} height={this.props.height} src={this.props.main}></Image> */}
                    <img src={this.props.main} className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.subtitle}</p>
                        <div className="portfolio-links">
                            <a href={this.props.main} data-gallery="portfolioGallery" className="portfolio-lightbox" title={this.props.title}><i className="bx bx-plus"></i></a>
                            <a href={this.props.detailPage} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;