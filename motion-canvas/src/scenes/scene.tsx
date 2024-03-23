import { makeScene2D } from '@motion-canvas/2d';
import {
  all,
  delay,
  loop,
  waitFor,
  waitUntil,
} from '@motion-canvas/core/lib/flow';
import { slideTransition } from '@motion-canvas/core/lib/transitions';
import { Direction, Vector2 } from '@motion-canvas/core/lib/types';
import {
  CodeBlock,
  edit,
  insert,
  lines,
  word,
} from '@motion-canvas/2d/lib/components/CodeBlock';
import { createRef, useScene } from '@motion-canvas/core/lib/utils';
import { Circle, Line, Rect, Txt, Node } from '@motion-canvas/2d/lib/components';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { cancel } from '@motion-canvas/core/lib/threading';

console.log('bruh');

export default makeScene2D(function* (view) {
  const code = createRef<CodeBlock>();

  const radius = createSignal(3);
  const area = createSignal(() => Math.PI * radius() * radius());

  const scale = 75;
  const textStyle = {
    fontWeight: 700,
    fontFamily: 'JetBrains Mono',
    fontSize: 32,
    offsetY: -1,
    padding: 10,
    cache: true,
  };

  const preview = createRef<Node>();
  const areaLabel = createRef<Txt>();
  const radiusLabel = createRef<Txt>();
  const circle = createRef<Circle>();
  const radiusLine = createRef<Line>();

  view.add(
    <Node x={500} ref={preview}>
      <Circle
        ref={circle}
      />
      <Line
        ref={radiusLine}
      />
      <Txt
        ref={radiusLabel}
      />
      <Txt ref={areaLabel} fill={'#FFFFFF'} {...textStyle} />
    </Node>,
  );

  yield view.add(
    <>
      <Rect
        // layout
        offset={-1}
        x={-960 + 80}
        y={-540 + 80}
        height={1080 - 160}
        width={960}
        clip
      >
        <CodeBlock
          selection={[
            [
              [0, 0],
              [8, 100],
            ],
          ]}
          ref={code}
          fontSize={40}
          lineHeight={36}
          offsetX={-1}
          x={-960 / 2}
          fontFamily={'JetBrains Mono'}
          code={`include "std.porth"`}
        />
      </Rect>
    </>,
  );
  yield* slideTransition(Direction.Bottom, 1);
  yield* waitUntil('signal');
  yield* code().selection(lines(1), 0.3);
  yield* areaLabel().text('Let\'s Look At The Example!', 0.3);
  yield* code().edit(0.8)`include "std.porth"
${insert(`
const NAME_CAPACITY 256 end 
memory name NAME_CAPACITY end`)
}
`;

  yield* waitUntil('name_radius');
  yield* code().selection(word(1, 8, 6), 0.3);
  yield* waitUntil('name_3');
  yield* code().selection(word(1, 30, 1), 0.3);

  yield* waitUntil('callback');
  yield* code().edit(1.2)`include "std.porth"

const NAME_CAPACITY 256 end
memory name NAME_CAPACITY end${insert(`

proc main in
  "What is your name? " puts`)}
`;

  yield* waitUntil('invoke');
  yield* code().selection(word(2, 44, 8), 0.3);

  yield* waitUntil('of_course');
  yield* code().selection(lines(0, Infinity), 0.3);

  yield* waitUntil('text');
  yield* code().edit(1.2)`include "std.porth"

const NAME_CAPACITY 256 end
memory name NAME_CAPACITY end

proc main in
  "What is your name? " puts
${insert(`
  NAME_CAPACITY name stdin read
  dup 0 <= if
    "ERROR: could not read your name, sorry ( ._.)" eputs
    1 exit
  end
`)}`;

  yield* waitUntil('hardcoded');
  yield* code().selection(word(7, 14, 8), 0.3);

  yield* waitUntil('text_callback');
  yield* code().edit(1.2)`include "std.porth"

const NAME_CAPACITY 256 end
memory name NAME_CAPACITY end

proc main in
  "What is your name? " puts

  NAME_CAPACITY name stdin read
  dup 0 <= if
    "ERROR: could not read your name, sorry ( ._.)" eputs
    1 exit
  end`;
  yield areaLabel().text('What is your name?', 0.3);

  yield* waitUntil('text_animate');
  const task = yield delay(
    0.6,
    loop(Infinity, () => radius(4, 2).to(3, 2)),
  );
  yield* code().edit(1.2)`include "std.porth"

const NAME_CAPACITY 256 end
memory name NAME_CAPACITY end

proc main in
  "What is your name? " puts

  NAME_CAPACITY name stdin read
  dup 0 <= if
    "ERROR: could not read your name, sorry ( ._.)" eputs
    1 exit
  end
  ${insert(`
  name over ptr+ 1 ptr- @8 = if
    1 -
  end`)}`;

  yield* waitUntil('circle');
  yield* areaLabel().text('- Admin', 0.3);
  yield* code().edit(1.2)`include "std.porth"

const NAME_CAPACITY 256 end
memory name NAME_CAPACITY end

proc main in
  "What is your name? " puts

  NAME_CAPACITY name stdin read
  dup 0 <= if
    "ERROR: could not read your name, sorry ( ._.)" eputs
    1 exit
  end

  name over ptr+ 1 ptr- @8 = if
    1 -
  end
${insert(`
"Hello, " puts
  name puts
  "! ( ^-^)" puts
end
`)}
  `;
  yield areaLabel().text('Hello Admin ! ( ^-^)', 0.3);
  yield* circle().scale(1, 1.2);
});