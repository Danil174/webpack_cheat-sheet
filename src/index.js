import Post from './post.js';
import './styles/styles.css';

const post = new Post(`new webpack post title`);

console.log(`Post to String`, post.toString());