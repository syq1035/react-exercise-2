import React, { Component } from 'react';
import './App.scss';
import Shelf from './components/Shelf';
import cartIcon from './assets/cart.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      store: {},
      shoppingcart: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      const store = {};
      data.map((item) => {
        if (!store[item.category]) {
          store[item.category] = [];
        }
        store[item.category].push(item);
      });
      this.setState({
        store,
      });
      console.log(this.state.store.keys);
    } catch (error) {
      console.log(error);
    }
  };

  handleAdd = (item) => {
    this.setState({
      shoppingcart: [...this.state.shoppingcart, item],
    });
  };

  render() {
    return (
      <main className="app">
        <div className="header">
          <h1>Store</h1>
          <div className="shoppingcart">
            <img src={cartIcon} alt="shoppingcart" />
            <button disabled>{this.state.shoppingcart.length}</button>
          </div>
        </div>
        <div className="content">
          {Object.keys(this.state.store).map((name, index) => (
            <Shelf
              commodifys={this.state.store[name]}
              name={name}
              key={index}
              onAdd={this.handleAdd}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
