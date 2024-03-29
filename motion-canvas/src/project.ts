import {makeProject} from '@motion-canvas/core';

import start from './scenes/start?scene';
import contents from  './scenes/contents?scene';
import example from './scenes/example?scene';
import scene from './scenes/scene?scene';
import scene2 from './scenes/scene2?scene';
import fibonacci from './scenes/fibonacci?scene';
import numbers from './scenes/numbers?scene';
import {Code, LezerHighlighter} from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

import { parser } from '@lezer/php';
const MarkdownHighlighter = new LezerHighlighter(parser);

 
export default makeProject({
  scenes: [start ,contents, example, scene2, numbers, scene, fibonacci],
});
