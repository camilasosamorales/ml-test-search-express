import React, { Component } from "react";
import ProductItem from './ProductItem';

class SearchResultsContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        const q = params.get('search');

        fetch('/items?search=' + q)
            .then(data => data.json())
            .then((res) => {
                this.setState({ results: res.items, oldValue: q });
            }).catch((error) => {
                this.setState({ results: null, oldValue: q });
            });
    }

    componentDidUpdate() {

        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        const newParam = params.get('search');
        const oldParam = this.state.oldValue;

        if (oldParam !== newParam) {
            fetch('/items?search=' + newParam)
                .then(data => data.json())
                .then((res) => {
                    this.setState({ results: res.items, oldValue: newParam });
                });
        }
    }

    render() {
        let { results } = this.state;

        return (
            <div className="search-page container">
                <div className="search-page-results">
                    {(results && results.length) ? results.map(this.renderProductItem) : null}
                </div>
            </div>
        );
    }

    renderProductItem = (productItem) => {

        return <ProductItem key={productItem.id} productItem={productItem} />
    }


}

export default SearchResultsContainer;

