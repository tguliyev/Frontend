import { game } from "./game.js"

const mainBar = {
    posX: 5,
    posY: 0,
    width: 10,
    height: 150,
    color: '#fff',
    moveStep: 10,
    render() {
        this.elem.style.width = this.width + 'px'
        this.elem.style.height = this.height + 'px'
        this.elem.style.background = this.color
        this.elem.style.top = this.posY + 'px'
    },
    moveUp() {
        if(this.posY == 0) return
        this.posY -= this.moveStep 
        this.render()
    },
    moveDown() {
        if(this.posY == game.height - this.height) return
        this.posY += this.moveStep
        this.render()
    }
}

export const bar1 = {
    render() {
        this.elem = document.getElementById('bar1')
        this.elem.style.right = this.posX + 'px'
        super.render()
    },
    create() {
        let div = document.createElement('div')
        div.id = 'bar1'
        game.elem.append(div)
        this.render()
    }
}

export const bar2 = {
    render() {
        this.elem = document.getElementById('bar2')
        bar2.elem.style.left = bar2.posX + 'px' 
        super.render()
    },
    create() {
        let div = document.createElement('div')
        div.id = 'bar2'
        game.elem.append(div)
        this.render()
    }
}

export function moveBars(e) {
    switch (e.keyCode) {
        case 40:
            bar1.moveDown()
            break;
        case 38:
            bar1.moveUp()
            break;
        case 87:
            bar2.moveUp()
            break;
        case 83:
            bar2.moveDown()
            break;
    }
}

bar1.__proto__ = mainBar
bar2.__proto__ = mainBar