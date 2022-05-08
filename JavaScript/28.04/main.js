import { game } from "./js/game.js";
import { bar1, bar2, moveBars } from "./js/bar.js"
import { ball } from "./js/ball.js";

game.create()
bar1.create()
bar2.create()
ball.create()
alert('The game are designed for two players.\nFirst user controls game with W and S buttons\nSecond user with arrow keys')
game.loopId = setInterval(ball.move, 40);
document.onkeydown = moveBars