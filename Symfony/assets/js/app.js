/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.css';
import '../css/bootstrap.min.css';
import '../css/material.min.css';
import '../css/maticons.css';
import '../css/home.css';

import 'bootstrap/dist/js/bootstrap.bundle';

// loads the jquery package from node_modules
//import $ from 'jquery';
// create global $ and jQuery variables
//global.$ = global.jQuery = $;


// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
import './script';

import truc from './script';
$(document).ready(function() {
    truc("ça éblouit.");
 });




console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
