import {makeProject} from '@motion-canvas/core';

import start from './scenes/start?scene';
import example from './scenes/example?scene';
import scene from './scenes/scene?scene';
import scene2 from './scenes/scene2?scene';
import scene3 from './scenes/scene3?scene';
import {Code, LezerHighlighter} from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

import { parser } from '@lezer/php';
const MarkdownHighlighter = new LezerHighlighter(parser);

 
export default makeProject({
  scenes: [start, example, scene2, scene , scene3],
});
