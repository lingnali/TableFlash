import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import styled, {css} from 'styled-components';
import {Modal} from './Modal/Modal';
import {Gallery} from "./Gallery/Gallery";


// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Gallery />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<Modal />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

// created style component
export const Image = styled.div`
  width: 305px;
  height: 305px;
  @media(max-width:990px){
    width: 100%;
  }
  background: no-repeat center/150% url(/img/${({index}) => index}.png);
  ${({inModal}) => !inModal && css`
    :hover {
    opacity: .9;
    }
  `}
`