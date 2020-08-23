import * as $ from "jquery";
import Post from '@models/post';
import './styles/styles.css';
import './styles/new.less';
import Ava from '@/assets/avatar';
import './babel';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';

const post = new Post(`new webpack post title`, Ava);

// console.log('csv', csv);
// console.log(`xml`, xml);

$('pre').html(post.toString());