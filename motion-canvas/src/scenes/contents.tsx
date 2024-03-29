import {makeScene2D, Layout, Txt, Circle, Rect, is,Img} from '@motion-canvas/2d';
import {all,createRef, beginSlide, waitFor} from '@motion-canvas/core';

// consts
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

const FONT2 = 'JetBrains Mono';
const FONT = 'CaskaydiaCove Nerd Font';

export default makeScene2D(function* (view) {

  const page = createRef<Txt>();
  view.add(
    <Txt ref={page} fill={DARK_BLUE} scale={1} offsetX={0} offsetY={-16} fontFamily={`'JetBrains Mono', monospace`} fontSize={48} >
      2
    </Txt>,
  );


  const imageRef = createRef<Img>();
  view.add(
    <Layout layout alignItems={'center'} height={750} width={1440} direction={'column'}
    justifyContent={'center'}>
      <Txt fill={'black'} fontSize={75} fontFamily={FONT2} >Bölümler</Txt>
      <Rect alignItems={'center'} justifyContent={'center'} >
        <Rect direction={'column'} marginTop={50}>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2} marginBottom={10}> 1. Porth nedir?</Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2} marginBottom={10}> 2. "Hello World" örneği </Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2} marginBottom={10}> 3. Kullanıcı ismi örneği </Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2} marginBottom={10}> 4. Fibonacci örneği</Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2} marginBottom={10}> 5. Sonuç </Txt>
        </Rect>
      </Rect>
      
    </Layout>
  );
  yield* beginSlide('start');
  yield* waitFor(0.6);
  yield* beginSlide('end');
});

