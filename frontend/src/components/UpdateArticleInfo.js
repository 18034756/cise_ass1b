import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      source: '',
      publication_date: '',
      DOI: '',
      ClaimedBenefit: '',
      LevelofEvidence: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://secure-fjord-48566.herokuapp.com/api/articles/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})

        console.log(res.data.title)
        this.setState({
          title: res.data.title,
          author: res.data.author,
          source: res.data.source,
          publication_date: res.data.publication_date,
          DOI: res.data.DOI,
          ClaimedBenefit: res.data.ClaimedBenefit,
          LevelofEvidence: res.data.LevelofEvidence,
        })
      })
      .catch(err => {
        console.log("Error from UpdateArticleInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      publication_date: this.state.publication_date,
      DOI: this.state.DOI,
      ClaimedBenefit: this.state.ClaimedBenefit,
      LevelofEvidence: this.state.LevelofEvidence,

    };

    axios
      .put('http://localhost:8082/api/articles/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-article/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateArticleInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateArticleInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/ShowArticles" className="btn btn-outline-warning float-left">
                  Show article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit article</h1>
              <p className="lead text-center">
                  Update article's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>

            
            <br />

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="source">Source</label>
              <input
                type='text'
                placeholder='source'
                name='source'
                className='form-control'
                value={this.state.source}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="publication_date">publication_date</label>
              <input
                type='date'
                placeholder='publication date'
                name='publication_date'
                className='form-control'
                value={this.state.publication_date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="DOI">DOI</label>
              <input
                type='text'
                placeholder='DOI'
                name='DOI'
                className='form-control'
                value={this.state.DOI}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="ClaimedBenefit">ClaimedBenefit</label>
              <input
                type='text'
                placeholder='Claimed Benefit'
                name='ClaimedBenefit'
                className='form-control'
                value={this.state.ClaimedBenefit}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="LevelofEvidence">LevelofEvidence</label>
              <input
                type='text'
                placeholder='LevelofEvidence'
                name='LevelofEvidence'
                className='form-control'
                value={this.state.LevelofEvidence}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update article</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateArticleInfo;