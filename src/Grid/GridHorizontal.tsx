import * as React from "react";
import { render } from "react-dom";
import { Frame, Scroll } from "framer";
// import "./styles.css";

function GridHorizontal() {
  return (
    <div>
      <div>
        <h1>Lactose Intolerant</h1>
        <Scroll direction="horizontal" width='100%' height={150} radius={30}>
          <Frame width='12em'  height='12em' radius={20} background={"#fff"} />
          <Frame width='12em'  left='13em' height='12em' radius={20} background={"#2500a2"} />
          <Frame width='8em'  left='26em' height='12em' radius={20} background={"#fff"} />
          <Frame width='21em'  left='35em' height='12em' radius={20} background={"#3400d3"} />
          <Frame width='6em'  left='57em' height='12em' radius={20} background={"#fff"} />
          <Frame width='12em'  left='64em' height='12em' radius={20} background={"#c8c8c8"} />
          
        </Scroll>
      </div>
      <div style={{marginTop: '15em'}}>
        <h1>Vegan</h1>
        <Scroll direction="horizontal" width='100%' height={150} radius={30}>
          <Frame width='12em'  height='12em' radius={20} background={"#009910"} />
          <Frame width='12em'  left='13em' height='12em' radius={20} background={"#00db67"} />
          <Frame width='8em'  left='26em' height='12em' radius={20} background={"#fff"} />
          <Frame width='21em'  left='35em' height='12em' radius={20} background={"#001212"} />
          <Frame width='6em'  left='57em' height='12em' radius={20} background={"#fff"} />
          <Frame width='12em'  left='64em' height='12em' radius={20} background={"#c8c8c8"} />
        </Scroll>
      </div>
      <div style={{marginTop: '15em'}}>
        <h1>Pregnant</h1>
        <Scroll direction="horizontal" width='100%' height={150} radius={30}>
          <Frame width='12em'  height='12em' radius={20} background={"#aa00aa"} />
          <Frame width='12em'  left='13em' height='12em' radius={20} background={"#aa55aa"} />
          <Frame width='8em'  left='26em' height='12em' radius={20} background={"#aa88aa"} />
          <Frame width='21em'  left='35em' height='12em' radius={20} background={"#aa66aa"} />
          <Frame width='6em'  left='57em' height='12em' radius={20} background={"#aa99aa`"} />
          <Frame width='12em'  left='64em' height='12em' radius={20} background={"#aa19aa"} />
        </Scroll>
      </div>
    </div>
  );
}
export default GridHorizontal;