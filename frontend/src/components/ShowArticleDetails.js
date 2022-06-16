import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://secure-fjord-48566.herokuapp.com/api/articles/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowArticleDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('https://secure-fjord-48566.herokuapp.com/api/articles/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };


  render() {

    const articles = this.state.articles;
    let articleItem = <div>
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
      <div className="ShowArticleDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/ShowArticles" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Article's detail</h1>
              <hr /> <br />
            </div>
          </div>
          <div>
            { articleItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,articles._id)}>Delete article</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-article/${articles._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit article
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showArticleDetails;