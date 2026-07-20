from manim import *


class AnimationTest(Scene):
    def construct(self):
        self.camera.background_color = WHITE

        title = Text("Animation Test", color=BLACK).scale(0.8)
        title.to_edge(UP)

        square = Square(
            side_length=1,
            color=BLUE,
            fill_color=BLUE,
            fill_opacity=1
        )

        square.move_to(LEFT * 5)

        self.add(title, square)

        self.play(
            square.animate.move_to(RIGHT * 5),
            run_time=5
        )

        self.wait(1)