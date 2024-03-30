import {makeProject} from '@motion-canvas/core';

import start from './scenes/start?scene';
import contents from  './scenes/contents?scene';

import nedir from './scenes/nedir?scene';
import helloworld from './scenes/helloworld?scene';

import numbers from './scenes/numbers?scene';

import fizzbuzz from './scenes/fizzbuzz?scene';
import fibonacci from './scenes/fibonacci?scene';
import sonuc from './scenes/sonuc?scene';

import tesekkur from './scenes/tesekkur?scene';
import qr from './scenes/qr?scene';

import {Code, LezerHighlighter} from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

import { parser } from '@lezer/php';
const MarkdownHighlighter = new LezerHighlighter(parser);

 
export default makeProject({
  scenes: [start ,contents, nedir, helloworld, numbers, fizzbuzz, fibonacci, sonuc, tesekkur, qr],
});
