import { makeScene2D, Txt } from '@motion-canvas/2d';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import { lines , word} from '@motion-canvas/2d';


import {
  CodeBlock,
  edit,
  insert,
  remove,
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
import { all, createRef, waitFor, useLogger } from '@motion-canvas/core';

import { Circle, Line, Rect, Node } from '@motion-canvas/2d/lib/components';

import { Code, LezerHighlighter } from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

//import { parser } from '@lezer/javascript';
import { parser } from 'lezer-porth';
import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const PURPLE = "#6f42c1";
const GRAY = "#6a737d";
const BLACK_a = "#24292e";
const BLACK = "#000000";
const RED = "#d73a49";
const ORANGE = "#e36209";
const BLUE = "#005cc5";
const DARK_BLUE = "#032f62";
const WHITE = "#ffffff";
const GREEN = "#22863a";

function sigmoid(z: number) {
  return 1 / (1 + Math.exp(-z/6));
}

const MyStyle = HighlightStyle.define([
  { tag: tags.keyword, color: BLUE },
  { tag: tags.function(tags.variableName), color: GRAY },
  { tag: tags.number, color: BLACK },
  { tag: tags.content, color: RED },
  { tag: tags.literal, color: ORANGE },
  { tag: tags.string, color: BLACK },
  { tag: tags.atom, color: BLACK },
  { tag: tags.definitionKeyword, color: ORANGE },
  { tag: tags.definitionOperator, color: ORANGE },

  // ...
]);

const MarkdownHighlighter = new LezerHighlighter(parser, MyStyle);

export default  makeScene2D(function* (view) {
  const logger = useLogger();

  //  page number
  const page = createRef<Txt>();
  view.add(
    <Txt ref={page} fill={DARK_BLUE} scale={1} offsetX={0} offsetY={-16} fontFamily={`'JetBrains Mono', monospace`} fontSize={48} >
      7
    </Txt>,
  );

  const codeRef = createRef<Code>();
  yield view.add(<Code ref={codeRef} code={``} offsetX={-1} x={-360} highlighter={MarkdownHighlighter} fill={BLACK} fontSize={48} />);

  yield* beginSlide('proc  main');
  yield* codeRef().code.append(1.2)`proc main in
end`;
  yield* beginSlide('Hello World');
  yield* all(
    codeRef().code.insert([1, 0], 2.4)`  1 while dup 100 < do
    dup 15 mod 0 = if
      "FizzBuzz\\n" puts
    else dup 3 mod 0 = if*
      "Fizz\\n" puts
    else dup 5 mod 0 = if*
      "Buzz\\n" puts
    else 
      dup print
    end
    1 +
  end drop
`,
    codeRef().code.prepend(2.4)`include "std.porth"\n`,
  ) 

  yield* beginSlide('run');
  yield* codeRef().position.x(-360,1.2).to(-570,1.2);

  //yield* beginSlide('alt');

  //const consolee = createRef<Code>();
  //yield view.add(<Code ref={consolee} code={`$`} y={340} fill={BLACK} />);
  //yield* waitFor(0.3);
  //yield* consolee().code.insert([0, 1], `./porth com -r fib.porth`, 1.2);

  yield* beginSlide('alt2');
  yield* waitFor(0.6);

  const stack = createRef<Code>();
  const rect = createRef<Rect>();
  const output = createRef<Code>();
  yield view.add(
    <Rect
      ref={rect} y={-230} x={300} height={400} width={300} offsetX={- 1} offsetY={- 1} fill = { GRAY } radius = { 20} >
      <Rect
        ref={rect} x={-150} y={-170} height={70} width={300} offsetX={-1} fill={PURPLE} radius={20} >
        <Code ref={stack} code={`stack\n`} offsetX={-1} offsetY={-1} y={-40} x={-130} highlighter={MarkdownHighlighter} fill={WHITE} fontSize={56} fontFamily=  {'JetBrains Mono'}/>
      </Rect>
      <Rect
        ref={rect} x={-150} y={250} height={70} width={300} offsetX={-1} fill={GRAY} radius={20} >
        <Code ref={output} code={``} offsetX={-1} offsetY={-1} y={-40} x={-130}  fill={WHITE} fontSize={56} fontFamily={'JetBrains Mono'} />
      </Rect>
    </Rect>
  );
  yield* beginSlide('alt3');

  let a = 1;
  let anim = 0.6;
  let constN = 100;

  yield* stack().code.append(0.6)`${a.toString()}\n`;
  

  while (a < constN) {

    anim = 1 - ((sigmoid(a)) * 1 - 0.05);

    let aWidth = a.toString().length;

    if (a < 1) {
      yield* beginSlide('control'); 
    }
    
    yield* stack().code.append(anim)`${a.toString()}\n`;
    yield* all(
      stack().code.remove(lines(2), anim),

    );
    

    a++;
  }



  yield* waitFor(0.6);

  yield* beginSlide('alt4');
  yield* waitFor(0.6);


  yield* beginSlide('end');
});