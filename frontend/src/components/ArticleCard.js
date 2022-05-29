import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <NavLink to={`/show-article/${article._id}`}>
                        { article.title }
                    </NavLink>
                </h2>
                <h3>{article.author}</h3>
            </div>
        </div>
    )
};

export default ArticleCard;