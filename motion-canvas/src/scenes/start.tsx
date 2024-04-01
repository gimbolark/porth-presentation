import {Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {
  Color,
  all,
  beginSlide,
  cancel,
  createRef,
  createSignal,
  easeInOutCubic,
  loop,
  waitFor, 
} from '@motion-canvas/core';

import { Code, LezerHighlighter } from '@motion-canvas/2d';
//Code.defaultHighlighter = new LezerHighlighter(parser);

import { parser } from '@lezer/php';

import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';


const MyStyle = HighlightStyle.define([
  { tag: tags.keyword, color: 'black' },
  { tag: tags.function(tags.variableName), color: 'black' },
  { tag: tags.number, color: 'black' },
  { tag: tags.string, color: 'black' },
  { tag: tags.color, color: 'black' },
  { tag: tags.comment, color: 'gray' },
  { tag: tags.lineComment, color: 'gray' },
  { tag: tags.docComment, color: 'gray'},
  { tag: tags.blockComment, color: 'gray'},
  { tag: tags.comment, color: 'orange' },
  // ...
]);

const MarkdownHighlighter = new LezerHighlighter(parser,MyStyle);

const PURPLE = "#6f42c1";
const GRAY = "#6a737d";
const DARK_GRAY = "#24292e";
const BLACK = "#000000";
const RED = "#d73a49";
const ORANGE = "#e36209";
const BLUE = "#005cc5";
const DARK_BLUE = "#032f62";
const WHITE = "#ffffff";
const GREEN = "#22863a";


export default makeScene2D(function* (view) {
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  const backdrop = createRef<Rect>();
  const title = createRef<Txt>();
  const rotation = createSignal(0);
  const rotationScale = createSignal(0);

  //  page number
  const page = createRef<Txt>();
  view.add(
    <Txt ref={page} fill={DARK_BLUE} scale={1} offsetX={0} offsetY={-16} fontFamily={`'JetBrains Mono', monospace`} fontSize={48} fontWeight={700} >
      1
    </Txt>,
  );

  view.add(
    <Txt
      ref={title}
      scale={0.6}
       rotation={() => -rotation() * rotationScale()}
      fill={RED}
    >
      porth dili
    </Txt>,
  );
 
  /*
  view.add(
    <Rect
    ref={backdrop}
    width={'70%'}
    height={'10%'}
    offsetY={-2.4}
    fill={GRAY}
    radius={20}
    smoothCorners
    >
    </Rect>
    )
    */
    

  const names = createRef<Code>();
  view.add(
    <Code
      ref={names}
      scale={0.18}
      offsetX={0}
      offsetY={-4}
      highlighter={MarkdownHighlighter}
      fill={BLACK}
      code={`\
// murat berk yetiştirir 032290008
// barış ışık            032290004`}
    >
    </Code>,
  );
  yield* beginSlide('start');
  yield* waitFor(0.6);
  yield* beginSlide('finish');
});