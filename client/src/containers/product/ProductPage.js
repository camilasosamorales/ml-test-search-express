import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProductDetails from './ProductDetail';


class ProductPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isFetching: false,
            error: false
        };
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.setState({ isFetching: true });

        const arrayParam = pathname.trim().split('/');
        const idProduct = arrayParam[2];

        fetch("/items/" + idProduct)
            .then(data => data.json())
            .then((res) => {
                this.setState({
                    results: res,
                    isFetching: false
                });
            })
            .catch((error) =>{
                this.setState({
                    isFetching: false,
                    error: true
                });
            });
    }

    
    render() {
        let { results } = this.state;
        return (
            <div className="product-page container">
                {(this.state.isFetching) ?
                    null
                    :
                    this.renderProduct(this.state.results)
                }
                {(this.state.results.item) ?
                    <Helmet>
                        <title> {`${results.item.title} - Compra en Mercado Libre`}</title>
                        <meta name="description" content={`Compralo en Mercado Libre a $ ${results.item.price.amount} - Comprá en 3 cuotas - Envío gratis.`} />
                    </Helmet>
                    :
                    <Helmet>
                        <title> {`Compra en Mercado Libre`}</title>
                    </Helmet>
                }

            </div>

        )


    }

    renderProduct = (product) => {

        if (this.state.error) {
            return <div><h1>No hay resultados</h1></div>
        }
        else {
            return <ProductDetails product={product} item={product.item} />;

        }

    }
}

export default ProductPage;