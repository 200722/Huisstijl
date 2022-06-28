import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookItem from "../components/BookItem";

const ArticlePage = () => {
  const { slug } = useParams();
  console.log(slug);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // http://localhost/wp-huisstijl/wp-json/wp/v2/books?per_page=1
    fetch(`http://localhost/ldh/wp-json/wp/v2/pages?slug=${slug}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      //   <ul className="title">
      <div>
        {items.map((item) => (
          <BookItem key={item.id} book={item} />
        ))}
      </div>
    );
  }
};

export default ArticlePage;
