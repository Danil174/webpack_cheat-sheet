import Post from './post.js';

const post = new Post(`new webpack post title`);

console.log(`Post to String`, post.toString());