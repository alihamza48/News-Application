import {useState, useEffect} from "react"
import NewsItem from "./NewsItem";



const NewsBoard = (props) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url= `https://newsapi.org/v2/top-headlines?country=us&${props.category}&apiKey=730c1c7cdf834976808dac3171ad8efd`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[props.category])


    return <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles?.map((news, index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
}
 
export default NewsBoard;