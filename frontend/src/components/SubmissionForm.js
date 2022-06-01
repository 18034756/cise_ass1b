import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class SubmissionForm extends Component {
  constructor() {
    super();
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
      .post('https://asdasdadasdsaewr.herokuapp.com/api/articles', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          source: '',
          publication_date: '',
          DOI: '',
          ClaimedBenefit: '',
          LevelofEvidence: ''
            
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err)
        console.log("Error in CreateArticle!");
      })
  };

  render() {
    return (
      <div className="CreateArticle">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Submit Article</h1>

              <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                                <p>Title:</p>
                                <input
                                    type='text'
                                    placeholder="title"
                                    name='title'
                                    className='form-control'
                                    value={this.state.title}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>Author:</p>
                                <input type='text'
                                    placeholder="author"
                                    name='author'
                                    className='form-control'
                                    value={this.state.author}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>Source:</p>
                                <input type='text'
                                    placeholder="source"
                                    name='source'
                                    className='form-control'
                                    value={this.state.source}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>Publication_date:</p>
                                <input type='date'
                                    placeholder="publication_date"
                                    name='publication_date'
                                    className='form-control'
                                    value={this.state.publication_date}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>DOI:</p>
                                <input type='text'
                                    placeholder="DOI"
                                    name='DOI'
                                    className='form-control'
                                    value={this.state.DOI}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>ClaimedBenefit:</p>
                                <input type='text'
                                    placeholder="ClaimedBenefit"
                                    name='ClaimedBenefit'
                                    className='form-control'
                                    value={this.state.ClaimedBenefit}
                                    onChange={this.onChange} />
                            </div>

                            <div className='form-group'>
                                <p>LevelofEvidence:</p>
                                <input type='text'
                                    placeholder="LevelofEvidence"
                                    name='LevelofEvidence'
                                    className='form-control'
                                    value={this.state.LevelofEvidence}
                                    onChange={this.onChange} />
                            </div>

                            <input
                                type="submit"
                                value="Submit"
                            />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmissionForm;