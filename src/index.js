import Post from '@models/post';
import './styles/styles.css';
import Ava from '@/assets/avatar';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';

const post = new Post(`new webpack post title`, Ava);

console.log(`Post to String`, post.toString());

// console.log('csv', csv);
// console.log(`xml`, xml);