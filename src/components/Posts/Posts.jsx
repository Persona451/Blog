import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import styles from './posts.module.css'
import postService from '../../services/posts';

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')
    const [showAll, setShowAll] = useState(false)
    const [wrapper, setWrapper] = useState("wrapper-grid")

    useEffect(() => {
        postService
            .get()
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            title: newPost,
            published: Math.random() > 0.5
        }
        postService
            .create(postObject)
            .then(res => setPosts(posts.concat(res.data)))
        setNewPost('')
    }

    const togglePublished = (id, published) => {

        const editedInfo = {
            'published': !published
        }
        postService
            .edit(id, editedInfo)
            .then(res => {
                setPosts(posts.map(post => post.id === id ? res.data : post))
            })
            .catch(err => console.log(err))
    }

    const deletePost = (id) => {
        postService
            .delete(id)
            .then((res) => {
                setPosts(posts.filter((post) => post.id !== id))
            })
    }

    const postsToShow = showAll
        ? posts
        : posts.filter(post => post.published)

    // const handlePostChange = (event) => {
    //     console.log(event.target.value); то что пользователь вводит в input
    //     setNewPost(event.target.value)
    // }

    return (
        <div>
            <div>
                <button onClick={() => setWrapper("wrapper-list")}>
                    Список
                </button>
                <button onClick={() => setWrapper("wrapper-grid")}>
                    Сетка
                </button>
                <button onClick={() => setWrapper("wrapper-grid_3")}>
                    Сетка 3
                </button>
                <button className={styles.click} onClick={() => setShowAll(!showAll)}>
                    Показать {showAll ? 'Опубликовано' : 'Все'}
                </button>
            </div>
            <div className={styles[wrapper]}>
                {postsToShow.map(post => {
                    return (
                        <Post
                            style={{width: `${wrapper === "wrapper-grid_3" ? "30%" : "40%"}`}}
                            key={post.id}
                            post={post}
                            togglePublished={togglePublished}
                            deletePost={deletePost}
                        />
                    )
                })}
            </div>
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