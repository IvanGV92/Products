

import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';









class Main extends Component {


  constructor(props){
    super(props);
    this.state= {
      products:[],
      isLoading: true,
      error: null
        };
  }

  componentDidMount(){


    fetch('http://localhost:8080/api/')
      .then(response=> response.json())
        .then(products=> {
          this.setState({ products, isLoading:false, error:null });
        })
      .catch(error => this.setState({ products:[], error, isLoading: false }));




  }


  render(){
    const { products, isLoading, error } = this.state;

    if(error){
      return <p>{error.message}</p>;
    }
    if(isLoading){
      return (
        <div>
          <Header />
          <p>Loading...</p>

          <Footer />
        </div>
      );
    }else{
      return (
        <div>
          <Header />

            {products.products.map(product =>
              <div className="products" key={product.name} >
                <h3>{product.name}</h3>
                <img className="product" src={product.url_image}></img>
                <h5>Price: {product.price}$</h5>
                <h5>Stock: {product.stock} units</h5>
                <h5>Review: {product.review} 	&#9734;</h5>

              </div>
            )}


          <Footer />
        </div>
      );
    }

}
}


export default withRouter(Main);
