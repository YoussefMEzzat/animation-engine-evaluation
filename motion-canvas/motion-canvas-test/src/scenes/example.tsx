import {
  Rect,
  Txt,
  makeScene2D,
} from "@motion-canvas/2d";
import {
  createRef,
  all,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // White background
  view.fill("#ffffff");

  // Blue square
  const square = createRef<Rect>();

  // Title
  const title = createRef<Txt>();

  view.add(
    <>
      <Txt
        ref={title}
        text="Animation Test"
        y={-250}
        fontSize={60}
        fill="#000000"
      />

      <Rect
        ref={square}
        width={120}
        height={120}
        fill="#2563EB"
        x={-700}
      />
    </>
  );

  // Move the square from left to right in 5 seconds
  yield* all(
    square().position.x(700, 5)
  );
});