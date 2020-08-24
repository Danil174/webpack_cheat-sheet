import * as $ from "jquery";
import Post from '@models/post';
import './styles/styles.css';
import './styles/new.less';
import Ava from '@/assets/avatar';
import './babel';
import React from "react";
import {render} from "react-dom";
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';

const post = new Post(`new webpack post title`, Ava);

// console.log('csv', csv);
// console.log(`xml`, xml);

const App = () => {
    return (
        <main className="container">
            <h1>Webpack</h1>
            <div className="avatar"></div>
            <hr />
            <pre></pre>
            <div className="box"></div>
        </main>
    )
}

render(<App />, document.getElementById('app'));

$('pre').html(post.toString());