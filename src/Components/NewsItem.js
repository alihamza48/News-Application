import image from "./news.jpg"
const NewsItem = (props) => {
    return (
        <div className="card mb-4px d-inline-block my-3 mx-3 px-2 py-2  " style={{maxWidth:"340px"}} data-bs-theme="dark">
  <img src={props.src?props.src:image} style={{height:"200px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title.slice(0,15)}</h5>
    <p className="card-text">{props.description?.slice(0,130)?props.description?.slice(0,130):"This is fake data.This is fake data. This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.This is fake data.".slice(0,150) }</p>
    <a href={props.url} className="btn btn-primary">Explore</a>
  </div>
</div>
    );
}
 
export default NewsItem;