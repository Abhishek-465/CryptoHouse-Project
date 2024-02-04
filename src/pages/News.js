import React, { useEffect, useState } from "react";


const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/everything?q=crypto%20bitcoin&apiKey=8f17f8472480420c94ced67e4dfe9393"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1 className="text-center mb-8 text-[40px] font-bold">Trending news regarding Digital Currencies</h1>
    <p className="text-[20px] text-center text-gray-100 mb-3">Your on the go newspaper regarding crypto</p>
          <div className="flex flex-wrap justify-center items-center ">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div className="bg-back m-5 text-white w-[300px] h-[350px] rounded-2xl flex flex-col justify-center items-center text-center">
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} className="w-[280px] h-[200px] rounded-2xl border-back border-1" alt="..." />
              <div className="p-1">
                <h5 className="text-[25px] text-bold text-back">{ele.author == "" ? "Cryptoguru" : ele.author}</h5>
                <p className="text-[15px] px-4">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;