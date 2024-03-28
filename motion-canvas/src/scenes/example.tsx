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
      3
    </Txt>,
  );


  const imageRef = createRef<Img>();
  view.add(
    <Layout layout alignItems={'center'} height={750} width={1440} direction={'column'}>
      <Txt fill={'black'} fontSize={75} fontFamily={FONT2} >porth</Txt>
      <Rect alignItems={'center'} justifyContent={'center'} >
        <Rect direction={'column'}>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2}> -  2021'de geliştirilmeye başlanmıştır</Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2}> -  "It is like Forth but in Python" </Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2}> -  "Recreational Programming" </Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2}> -  Açık kaynak kodlu bir dil</Txt>
          <Txt fill={'black'} fontSize={35} fontFamily={FONT2}> -  Kullanan sayısı çok az</Txt>
        </Rect>
        <Rect alignItems={'center'} justifyContent={'center'} height={600}
        padding={10} margin={25} direction={'column'} radius={25}>
          <Rect fill={'white'} alignItems={'center'} justifyContent={'center'} height={550} 
        padding={15} margin={25} direction={'column'} radius={25}>
            <Rect fill={'#6a737d'} padding={5} radius={25}>         
              <Img ref={imageRef} src={"src/images/alexey.png"} height={400} scale={0.7} />
            </Rect>
            <Rect fill={'white'} padding={5} radius={25} direction={'column'}>         
              <Txt fill={'black'} fontSize={30} fontFamily={FONT2}>Alexey Kutepov</Txt>
              <Txt fill={'black'} fontSize={30} fontFamily={FONT2}>@rexim</Txt>
            </Rect>
          </Rect>
        </Rect>
      </Rect>
      
    </Layout>
  );
  yield* beginSlide('start');
  yield* waitFor(0.6);
  yield* beginSlide('end');
});

