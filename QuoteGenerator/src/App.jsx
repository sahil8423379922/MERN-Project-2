import React, { useEffect, useState } from "react";
import QuoteScreen from "./Screens/QuoteScreen";
import axios from "axios";

export default function App() {
  const [quote, setquote] = useState();
  const [author, setauthor] = useState();

  const renderquote = () => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      const randomindex = Math.floor(Math.random() * res.data.length);
      setquote(res.data[randomindex].text);
      setauthor(res.data[randomindex].author);
      console.log(quote);
    });
  };

  useEffect(renderquote, []);
  return <QuoteScreen quote={quote} author={author} rq={renderquote} />;
}
