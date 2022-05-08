import { bar1, bar2 } from "./bar.js"
import { game } from "./game.js"

export const ball = {
    width: 30,
    height: 30,
    color: '#fff',
    posX: 20, 
    posY: 5, 
    moveStepX: 5,
    moveStepY: 5,
    render(state = 0) {
        if (state) {
            ball.elem = document.getElementById('ball')
            ball.elem.style.width = ball.width + 'px'
            ball.elem.style.height = ball.height + 'px'
            ball.elem.style.borderRadius = '50%'
            ball.elem.style.backgroundColor = ball.color
        }
        ball.elem.style.left = ball.posX + 'px'
        ball.elem.style.top = ball.posY + 'px'
    },
    create() {
        let div = document.createElement('div')
        div.id = 'ball'
        game.elem.append(div)
        this.render(1)
    },
    move() {
        if (ball.posX < game.separator.posX) {
            if (ball.posX == bar2.width + bar2.posX &&
                ball.posY + ball.width / 2 < bar2.posY + bar2.height && 
                ball.posY + ball.width / 2 > bar2.posY) ball.moveStepX *= -1    
        } else {
            if (ball.posX + ball.width == game.width - bar1.width - bar1.posX &&
                ball.posY + ball.width / 2 < bar1.posY + bar1.height && 
                ball.posY + ball.width / 2 > bar1.posY) ball.moveStepX *= -1
        }

        if (ball.posY == 0 || ball.posY == game.height - ball.height) ball.moveStepY *= -1

        ball.posX += ball.moveStepX
        ball.posY += ball.moveStepY
        ball.render()
        if (ball.posX < bar2.width + bar2.posX) game.counter.addScore(0)
        if (ball.posX + ball.width > game.width - bar1.width - bar1.posX) game.counter.addScore(1)
    }
}