import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ArticleCard from './ArticleCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/articles')
      .then(res => {
        this.forceUpdate();
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowArticlesList');
      })
  };

  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if(!articles) {
        articleList = "there is no articles record!";
    } else {
        articleList = articles.map(article =>
        <ArticleCard article={article} key={article.title} />
      );
    }

    let ArticleItem = <div>
    <table className="table table-hover table-dark">
      {/* <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Title</td>
          <td>{ articles.title }</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Author</td>
          <td>{ articles.author }</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Source</td>
          <td>{ articles.source }</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Publish date</td>
          <td>{ articles.published_date }</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>DOI</td>
          <td>{ articles.DOI }</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>ClaimedBenefit</td>
          <td>{ articles.ClaimedBenefit }</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>LevelofEvidence</td>
          <td>{ articles.LevelofEvidence }</td>
        </tr>
  
      </tbody>
    </table>
  </div>

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Articles List</h2>
            </div>
          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;