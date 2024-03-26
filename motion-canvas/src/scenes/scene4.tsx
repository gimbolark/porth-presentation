import { makeScene2D } from '@motion-canvas/2d';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import {
  CodeBlock,
  edit,
  insert,
  lines,
  remove,
  word,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import {
  Color,
  DEFAULT,
  beginSlide,
  cancel,
  createSignal,
  easeInOutCubic,
  loop,
} from '@motion-canvas/core';
import { all, createRef, waitFor } from '@motion-canvas/core';

import { Code, LezerHighlighter } from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

import { parser } from '@lezer/javascript';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const PURPLE = "#6f42c1";
const GRAY = "#6a737d";
const BLACK = "#24292e";
const RED = "#d73a49";
const ORANGE = "#e36209";
const BLUE = "#005cc5";
const DARK_BLUE = "#032f62";
const WHITE = "#ffffff";
const GREEN = "#22863a";


const MyStyle = HighlightStyle.define([
  { tag: tags.keyword, color: RED },
  { tag: tags.function(tags.variableName), color: GRAY },
  { tag: tags.number, color: BLUE },
  { tag: tags.string, color: BLUE },
  // ...
]);

const MarkdownHighlighter = new LezerHighlighter(parser, MyStyle);





export default  makeScene2D(function* (view) {
  const codeRef = createRef<Code>();


  yield view.add(<Code ref={codeRef} code={``} offsetX={-1} x={-360} highlighter={MarkdownHighlighter} />);
  
  yield* beginSlide('include');
  yield* codeRef().code.append(1.2)`include "std.porth"`;

  yield* beginSlide('proc  main');
  yield* codeRef().code.append(1.2)`\nproc main in
end`;
  yield* beginSlide('Hello World');
  yield* codeRef().code.insert([2,0],1.2)`    "Hello, World!\\n" puts\n`;

  yield* beginSlide('run');

  yield* beginSlide('alt');

  const consolee = createRef<Code>();
  yield view.add(<Code ref={consolee} code={`$`} y={300} highlighter={MarkdownHighlighter}/>);
  yield* waitFor(0.3);
  yield* consolee().code.insert([0,1],`./porth com -r hello_world.porth`,1.2);
  
  
  yield* beginSlide('alt1');
  consolee().moveOffset(new Vector2(-1, -1)); 
  yield* consolee().code.append(`\nHello, World!`, 1.2);

  yield* waitFor(0.6); 

  yield* beginSlide('alt2');
  yield* waitFor(0.6); 


  yield* beginSlide('alt3');
  yield* waitFor(0.6);


  yield* beginSlide('alt4');
  yield* waitFor(0.6); 


  yield* beginSlide('end'); 
});