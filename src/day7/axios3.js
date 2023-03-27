import React ,{useState , useEffect} from 'react';
import Axios from 'axios';
const Axios3 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [click, setClick] = useState(1);
    const dataGet = () => {
        setClick(id)
    }
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)
        .then(response =>{
            // console.log(response);
            setPost(response.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[click]);
    return (
        <div>
            <label>User Id : </label>
            <input type="text"  onChange={(e) => setId(e.target.value)}/><br /><br />
            <input type="button" value="Get Post" onClick={dataGet}/>           
            <ul>
                <li>userId : {post.userId}</li>
                <li>id : {post.id}</li>
                <li>title : {post.title}</li>
                <li>body : {post.body}</li>
            </ul>
        </div>
    );
}

export default Axios3;
