import {Circle, Layout, Rect, makeScene2D,Txt} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

const RED = '#ff6470';

export default makeScene2D(function* (view) {
  const colA = createRef<Rect>();
  const colB = createRef<Rect>();
  const rowA = createRef<Layout>();

  view.add(
    <>
      <Layout layout gap={10} padding={10} width={840} height={440}>
        <Rect ref={colA} grow={1} fill={'#242424'} radius={4} />
        <Layout gap={15} direction="column" grow={4}>
            
          <Rect grow={2} fill={'#242424'} radius={4} />
        </Layout>
        <Rect ref={colB} grow={3} fill={'#242424'} radius={4} />
      </Layout>
    </>,
  );

  yield* all(colB().grow(1, 0.8), colA().grow(2, 0.8));
  //yield* rowA().grow(1, 0.8);
  yield* all(colB().grow(3, 0.8), colA().grow(1, 0.8));
  //yield* rowA().grow(8, 0.8);
});