class HtmlElement {
    constructor(name, isClosing, {id = null, innerHtml = null, attributes = null, styles = null, children = null}) {
        this.name = name
        this.isClosing = isClosing
        this.id = id
        this.innerHtml = innerHtml
        this.attributes = attributes
        this.styles = styles
        this.children = children
    }

    addStyle(style, value) {
        if (this.styles == null) this.styles = new Map()
        if (this.styles == null) console.log('null')
        this.styles[style] = value
        // console.log(this.styles[style])
    }

    append(element) {
        this.children.push(element)
    }
    
    prepend(element) {
        this.children.unshift(element)
    }

    getHtml() {
        let elem = document.createElement(this.name)
        if (this.id != null) elem.id = this.id
        if (this.innerHtml != null) elem.innerHTML += this.innerHtml
        if (this.attributes != null) this.attributes.forEach((value, key) => elem.setAttribute(key, value) );
        if (this.styles != null) this.styles.forEach((value, key) => elem.style[key] = value )
        if (this.children != null) this.children.forEach(child => elem.innerHTML += child.getHtml() )
        return elem.outerHTML
    }
}

let h1 = new HtmlElement('h1', true, {innerHtml: 'Hello My Incredible Future', styles: new Map([['color', 'white'], ['backgroundColor', 'blue']])})
let p = new HtmlElement('p', true, {innerHtml: 'Hello My Incredible Future', styles: new Map([['color', 'red'], ['backgroundColor', 'blue']])})
let div1 = new HtmlElement('div', true, {styles: new Map([['backgroundColor', 'yellow']])})
let div = new HtmlElement('div', true, {id: 'wrapper', attributes: new Map([['attribute1', 'value1'], ['attribute2', 'value2']]), children: [div1, p, h1]})
div.addStyle('backgroundColor', 'white')
div.addStyle('margin', '20px')
div.addStyle('height', '100%')
// div.styles.forEach((value, key) => console.log(key + value))
document.body.innerHTML = div.getHtml()