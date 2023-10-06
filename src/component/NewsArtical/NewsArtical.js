import React from "react";
import './NewsArtical.css';

function NewsArticle({ author, title, description, url, urlToImage, publishedAt, index }) {
    return (
        <>
            <div className="news-article-card">
                <img src={urlToImage} alt="" className="news-article-image" />
                <h1 className="artical-title">title{title}</h1>
                <p>description {description}</p>
                <p> url{url}</p>
                <div className="artical-info">
                <p className="artical-author">{author}</p>
                <p className="artical-publishedAt">{publishedAt}</p>
               
                </div>
                <a href={url} target="blank" className="btn-read-more" >Read More</a>
            </div>
        </>
    )
}
export default NewsArticle