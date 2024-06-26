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
import { all, createRef, waitFor } from '@motion-canvas/core';

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

const MarkdownHighlighter = new LezerHighlighter(parser,MyStyle);

export default  makeScene2D(function* (view) {
  //  page number
  const page = createRef<Txt>();
  view.add(
    <Txt ref={page} fill={DARK_BLUE} scale={1} offsetX={0} offsetY={-16} fontFamily={`'JetBrains Mono', monospace`} fontSize={48} fontWeight={700} >
      4
    </Txt>,
  );

  const codeRef = createRef<Code>();
  yield view.add(<Code ref={codeRef} code={``} offsetX={-1} x={-360} highlighter={MarkdownHighlighter} fill={BLACK} fontSize={48} />);

  yield* beginSlide('proc  main');
  yield* codeRef().code.append(1.2)`proc main in
end`;
  yield* beginSlide('hello');
  yield* all(
    codeRef().code.insert([1, 0], 2.4)`    "Hello, World" puts\n`,
    codeRef().code.prepend(2.4)`
include "std.porth"
\n`,
  ) 

  yield* beginSlide('run');
  yield* codeRef().position.x(-360,1.2).to(-570,1.2);

  yield* beginSlide('alt');

  const consolee = createRef<Code>();
  yield view.add(<Code ref={consolee} code={`$`} y={340} fill={BLACK} />);
  yield* waitFor(0.3);
  yield* consolee().code.insert([0, 1], `./porth com -r hello.porth`, 1.2);

  yield* beginSlide('alt2');
  yield* waitFor(0.6);

  const rect = createRef<Rect>();
  const output = createRef<Code>();
  
  yield* waitFor(0.3);
  yield view.add(
    <Rect
      ref={rect} y={-80} x={100} offset={-1} height={100} width={500} offsetX={- 1} offsetY={- 1} fill = { GRAY } radius = { 20} >
      <Rect>
        <Code ref={output} code={`Hello, World`}  y={0} x={0}  fill={WHITE} fontSize={56} fontFamily={'JetBrains Mono'} />
      </Rect>
    </Rect>
  );
  yield* beginSlide('alt3');
});