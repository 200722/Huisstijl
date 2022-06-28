import React, { useEffect, useState } from "react";
import "../components/Navbar.css";
import Logo from "./logo";

function Navbar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost/ldh/wp-json/wp-api-menus/v2/menus/3")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
      //   <ul className="title">
      <div className="navba">
        <Logo />
        {items.items.map((item, key) => (
          <div className="navbar-item" key={key} href={item.url}>
            {item.title}
            {/* {item.children} */}
            <div>
              {item.children?.map((child, childKey) => (
                <a
                  key={childKey}
                  href={`/${item.object_slug}/${child.object_slug} `}
                >
                  {child.title}
                  {child?.children?.map((childChild, childChildKey) => (
                    <a
                      key={childChildKey}
                      href={`/${item.object_slug}/${childChild?.object_slug} `}
                    >
                      {childChild?.title}
                    </a>
                  ))}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Navbar;
// http://localhost/wp-huisstijl/wp-json/wp-api-menus/v2/menus/
