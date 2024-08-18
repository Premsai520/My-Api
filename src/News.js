import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import './News.css'
export default function News() {
  const [key, setKey] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const changeHandler = (e) => {
    setKey(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(""); // Reset error before new API call
    setNewsData(null); // Reset news data

    if (!key.trim()) {
      setError("Please enter a search keyword.");
      return;
    }

    fetch(
      `https://newsapi.org/v2/everything?q=${key}&sortBy=popularity&apiKey=6e0856871d0c4c49ae36a8aae652543e`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("News Not Found");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log full response for debugging
        if (data.articles.length === 0) {
          throw new Error("No articles found.");
        }
        const validArticles = data.articles.filter(
          (article) => article.title != "[Removed]" && article.description && article.url != null &&  article.urlToImage
        );
        validArticles.forEach((article) => {
          console.log("Title: ", article.title);
          console.log("Image URL: ", article.urlToImage);
        });

        setNewsData(validArticles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setError(error.message || "News not found");
      });
  };

  return (
    <>
    <div ref={ref} className={inView && (!newsData || newsData.length === 0 || error) ? "newsbg2" : "newsbg"}>
      <form onSubmit={submitHandler}>
        <center><h1 className="trending mt-3 mb-4">Trending News</h1></center>
        <input
          className="cityinput" type="text" placeholder="Search by Topic . . ."
          value={key}
          onChange={changeHandler}
        />
        <input className="submit mb-5 mt-2" type="submit" />
      </form>

      {error && <center><p style={{ color: "red" }}>{error}</p></center>}

      {newsData && (
        <div className="container">
          <div className="row">
            {newsData.map((article, index) => (
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card newscard mt-3 pb-5" style={{ display: 'flex', flexDirection: 'column', height: '90%' }}>
                {article.urlToImage ? (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="card-img-top"
                      style={{ height: "400px", objectFit: "cover" }}
                    /> ): (
                      <img
                        src="https://via.placeholder.com/200"
                        alt="placeholder"
                        className="card-img-top"
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                    )}
                  <div className='card-body'>
                  <div className="card-body" style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                  <h5 className="card-title">{index + 1}. {article.title}</h5>
                  <p className="card-text" style={{ flexGrow: 1 }}>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className='btn readmore mb-2 mt-2 pb-2'>
                      Read more
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
}
