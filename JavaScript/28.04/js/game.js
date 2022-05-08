import { ball } from "./ball.js";
import { bar1, bar2 } from "./bar.js";

const separator = {
    width: 1,
    height: 100,
    color: '#fff',
    posY: 0,
    posX: 50,
    render() {
        this.elem = document.getElementById('separator')
        this.elem.style.width = this.width + 'px'
        this.elem.style.height = this.height + '%'
        this.elem.style.backgroundColor = this.color
        this.elem.style.top = this.posY + 'px'
        this.elem.style.left = this.posX + '%'
    },
    create() {
        let div = document.createElement('div')
        div.id = 'separator'
        game.elem.append(div)
        separator.render()
    }
}

const counter = {
    width: 100,
    height: 30,
    render() {
        this.elem = document.getElementById('counter')
        this.elem.style.width = this.width + 'px'
        this.elem.style.height = this.height + 'px'
    },
    create() {
        let div = document.createElement('div')
        this.score1 = document.createElement('span')
        this.score2 = document.createElement('span')
        this.score1.innerHTML = 0
        this.score2.innerHTML = 0
        div.id = 'counter'
        div.append(this.score1)
        div.append(this.score2)
        game.elem.append(div)
        this.render()
    },
    addScore(player) {
        if (!player) this.score2.innerHTML++
        else this.score1.innerHTML++

        if (this.score1.innerHTML == 3 || this.score2innerHTML == 3) game.gameOver()
        else game.resetGame(player)
    }
}

export const game = {
    width: 600,
    height: 500,
    separator: separator,
    counter: counter,
    render() {
        this.elem = document.getElementById('game')
        this.elem.style.width = this.width + 'px'
        this.elem.style.height = this.height + 'px'
    },
    create() {
        let div = document.createElement('div')
        div.id = 'game'
        document.body.append(div)
        this.render()
        separator.create()
        counter.create()
    },
    resetGame(player) {
        if (!player) {
            ball.posY = bar1.posY + bar1.height / 2
            ball.posX = this.width - ball.width - bar1.posX - bar1.width - 5
        }
        else {
            ball.posY = bar2.posY + bar2.height / 2
            ball.posX = bar2.posX + bar2.width + 5
        }
    },
    gameOver() {
        clearInterval(this.loopId)
        alert('The game is over!!!')
    }
}