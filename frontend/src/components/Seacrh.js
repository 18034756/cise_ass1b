import React, { Component } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  Search(Searchinput) {
    let postdate = {
        "title": Searchinput
    }
    axios
      .post('http://localhost:8082/api/articles/search_article',postdate)
      .then(res => {
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
        articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    return (
        <div>
        <input ref={(input) => {this.search = input}}/>
        <button onClick={()=>this.Search(this.search.value)}>Search</button>
        <div className='inputs'>
        <input type='checkbox'/>Title
        <input type='checkbox'/>Author
        <input type='checkbox'/>Source
        
        </div>
        <div>
        <input type='radio'/>Hide
        </div>
        {/* <input type='checkbox'/>Publication_date */}
        
       
        {articleList}
        </div>
      
    );
  }
}

export default Search;