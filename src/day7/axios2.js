import React ,{useState , useEffect} from 'react';
import Axios from 'axios';
const Axios2 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>{
            console.log(response);
            setPost(response.data);
        })
        .catch(err =>{
            console.log(err)
        })
    },[id]);
    return (
        <div>
            <label>User Id : </label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>           
            <ul>
                <li>userId : {post.userId}</li>
                <li>id : {post.id}</li>
                <li>title : {post.title}</li>
                <li>body : {post.body}</li>
            </ul>
        </div>
    );
}

export default Axios2;
