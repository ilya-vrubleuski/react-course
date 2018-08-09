import React from 'react'
import { Add } from './components/Add'
import { News } from './components/News'

import './App.css';


class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  handleAddNews = (data) => {
    console.log('я вызвана из Add, но имею доступ к this.state у App!', this.state);
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews });
  }

  render() {
    const { news, isLoading } = this.state;
    return (
      <React.Fragment>
        <h3>Новости</h3>
        {isLoading && <p>Загружаю</p>}
        <Add onAddNews={this.handleAddNews} />
        {Array.isArray(news) && <News data={this.state.news} />}
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => { return response.json() })
      .then(data => setTimeout(() => {
        this.setState({ isLoading: false, news: data })
      }, 3000))
  }
}
export default App;
