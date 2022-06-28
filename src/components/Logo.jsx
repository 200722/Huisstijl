import React, { useEffect, useState } from "react";
import "../components/logo.css";

const Logo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // http://localhost/ldh/wp-json/wp/v2/media/
    fetch("http://localhost/ldh/wp-json/wp/v2/media/108/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          //   console.log(result);
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
    // console.log(items);
    return (
      <img className="logo" src={items.source_url} alt={items.image}></img>
    );
  }
};
export default Logo;
