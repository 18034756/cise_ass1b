import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect,
  Switch
 } from "react-router-dom";
import Home from './pages/Home';
import SearchArticle from './pages/SearchArticle';
import SubmitArticle from './pages/SubmitArticle';
import About from './pages/about';
import NotFoundPage from './pages/404';
import ShowArticles from './components/ShowArticles';
import SubmissionForm from './components/SubmissionForm';
import showArticleDetails from './components/ShowArticleDetails';
import UpdateArticleInfo from './components/UpdateArticleInfo';
import Button from './components/button';

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <div className="app">
            <Button label="click me"></Button>
          </div>
          <li><NavLink exact to= "/">Home</NavLink></li>
          <li><NavLink to = "/SearchArticle">Search Article</NavLink></li>
          <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
          <li><NavLink to = "/ShowArticles">Show Articles</NavLink></li>
          <li><NavLink to = "/About">About Us</NavLink></li>
        </ul>
      <div className="content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/SearchArticle" component={SearchArticle}/>
        <Route path="/SubmitArticle" component={SubmitArticle}/>
        <Route path="/About" component={About}/>
        <Route  path="/404" component={NotFoundPage}/>
        <Route  path='/ShowArticles' component={ShowArticles} />
        <Route  path='/create-article' component={SubmissionForm} />
        <Route  path='/show-article/:id' component={showArticleDetails} />
        <Route  path='/edit-article/:id' component={UpdateArticleInfo} />
        <Redirect to="/" />
      </Switch>
      </div>
      </div>
      </Router>
 );
}
export default App;