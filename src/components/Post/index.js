import styles from './Post.module.css';

export default function Post({post}) {
    return (
        <div className={styles.post}>
            <img className={styles.cover} src={`/assets/posts/${post.id}/cover.png`} alt=""/>
            <h2 className={styles.title}>{post.title}</h2>
            <button type="button" className={styles.readButton}>Ler</button>
        </div>
    );
}