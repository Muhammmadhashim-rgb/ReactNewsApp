import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


  constructor() {
    super()
    console.log("Hey! I,am a Constructor Form News");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d9b011487d04bf18e421d9eb6c9313a&page=1"
    let data = await fetch(url)
    let presentData = await data.json()
    console.log(presentData)
    this.setState({ articles: presentData.articles })
  }

 handalPer = async () => {
  console.log("Per");

  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d9b011487d04bf18e421d9eb6c9313a&page=${this.state.page - 1}`;

  let data = await fetch(url);
  let presentData = await data.json();
  console.log(presentData);

  this.setState({
    page: this.state.page - 1,
    articles: presentData.articles
  });
};


handalNext = async () => {
  console.log("Next");
  
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d9b011487d04bf18e421d9eb6c9313a&page=${this.state.page + 1}`;

  let data = await fetch(url);
  let presentData = await data.json();
  console.log(presentData);

  this.setState({
    page: this.state.page + 1,
    articles: presentData.articles
  });
};


  render() {

    return (

      <div className='container mt-5'>

        <h2 className='mb-4'>News Monkey- React App</h2>

        <div className="row">

          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />
            </div>

          })}

        </div>

        <div className="container d-flex justify-content-between">

          <button disabled={this.state.page <= 1} type="button" onClick={this.handalPer} className="btn btn-dark"> &larr; Perview</button>
          <button type="button" onClick={this.handalNext} className="btn btn-dark">Next &rarr;</button>

        </div>
      </div>
    )
  }
}
