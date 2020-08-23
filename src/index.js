import Post from './post.js';
import './styles/styles.css';
import Ava from './assets/avatar.jpg';

const post = new Post(`new webpack post title`, Ava);

console.log(`Post to String`, post.toString());