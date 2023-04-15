import React from 'react';
import styles from './post.module.css'
import Posts from '../Posts/Posts';

const Post = (props) => {
    return (
        <div className={styles.info} style={props.style}>
            <p className={styles.title}>{props.post.title}</p>
            <p className={styles.published}>{props.post.published ? 'Опубликовано' : 'Не опубликовано'}</p>
            <button onClick={() => props.togglePublished(props.post.id, props.post.published)}>
                {props.post.published ? 'В ожидании' : "Опубликовать"}
            </button>
            <button onClick={() => props.deletePost(props.post.id)}>
                Удалить
            </button>
        </div>
    );
};

export default Post;