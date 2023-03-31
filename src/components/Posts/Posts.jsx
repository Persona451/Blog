import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import styles from './posts.module.css'
import axios from 'axios';

const getPosts = () => {
    return axios.get('http://localhost:3001/posts')
}

const Posts = (props) => {
    // const { posts } = props
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
      getPosts()
      .then(res => {
        setPosts(res.data)
      })
    },[])

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            id: posts.length + 1,
            title: newPost,
            published: Math.random() > 0.5
        }
        setPosts(posts.concat(postObject))
        setNewPost('')
    }

    const postsToShow = showAll ? posts : posts.filter(post => post.published)

    // const handlePostChange = (event) => {
    //     console.log(event.target.value); то что пользователь вводит в input
    //     setNewPost(event.target.value)
    // }


    return (
        <div>
            <div>
                <button className={styles.click} onClick={() => setShowAll(!showAll)}>
                    Показать {showAll ? 'Опубликовано' : 'Все'}
                </button>
            </div>
            {postsToShow.map(post => {
                return (
                    <Post key={post.id} post={post} />
                )
            })}
            <form onSubmit={addPost}>
                <input className={styles.text}
                    type="text"
                    value={newPost}
                    onChange={event => setNewPost(event.target.value)}
                />
                <input className={styles.submit} type="submit" value="Создать пост" />
            </form>
        </div>
    );
};

export default Posts;