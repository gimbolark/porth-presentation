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
const MarkdownHighlighter = new LezerHighlighter(parser);



export default  makeScene2D(function* (view) {
  const codeRef = createRef<CodeBlock>();


  yield view.add(<CodeBlock ref={codeRef} code={``} />);
  
  yield* beginSlide('include');
  yield* codeRef().edit(1.2, false)`${insert(`include "std.porth"`)}`;


  yield* beginSlide('proc  main');
  yield* codeRef().edit(1.2)`include "std.porth"${insert(`
  
proc main
`)}`;
  yield* beginSlide('in end');
  yield* codeRef().edit(1.2)`include "std.porth"
    
proc main${insert(` in
 
end`)}
`;
  yield* beginSlide('Hello World');
  yield* codeRef().edit(1.2)`include "std.porth"
  
proc main in
    ${insert(`"Hello, World!" puts`)}
end
`;


  yield* beginSlide('run');
  yield* all(
    codeRef().selection(DEFAULT, 1),
    codeRef().position.y(-200, 1.5 ),
  );   
  
  
  yield* beginSlide('alt');

  const consolee = createRef<Code>();
  yield view.add(<Code ref={consolee} code={`$`} offsetY={0  } />);
  yield* waitFor(0.3);
  yield* consolee().code.insert([0,1],`./porth com -r hello_world.porth`,1.2);
  
  
  yield* beginSlide('alt1');
  consolee().moveOffset(new Vector2(-1, -1)); 
  yield* consolee().code.append(`\nHello, World!`, 1.2);
  yield* consolee().code.append(`\nlet x = 12;
  let y = 31
  let y = 31
  let y = 31
  let y = 31`, 1.2);

  yield* waitFor(0.6); 



  


  yield* beginSlide('alt2');
  yield* waitFor(0.6); 


  yield* beginSlide('alt3');
  yield* waitFor(0.6);


  yield* beginSlide('alt4');
  yield* waitFor(0.6); 


  yield* beginSlide('end'); 
});