import React, { Component } from "react";
import "../components/Cads/Cards.css";

export class BookItem extends Component {
  render() {
    const { title, content } = this.props.book;
    return (
      <div className="test">
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    );
  }
}

export default BookItem;
