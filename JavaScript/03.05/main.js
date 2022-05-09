class HtmlBlock {
    constructor({styles = null, children = null}={}) {
        this.styles = styles == null ? [] : styles
        this.children = children == null ? [] : children
    }

    addElement(element) {
        this.children.push(element)
    }

    addStyle(style) {
        this.styles.push(style)
    }

    getCode() {
        let style = document.createElement('style')
        this.styles.forEach(styleClass => style.innerHTML += styleClass.getCSS())
        let code = style.outerHTML
        this.children.forEach(child => code += child.getHtml())
        return code        
    }
}

class HtmlElement {
    constructor(name, isClosing, {innerHtml = null, attributes = null, styles = null, children = null}={}) {
        this.name = name
        this.isClosing = isClosing
        this.innerHtml = innerHtml
        this.attributes = attributes == null ? new Map() : attributes
        this.styles = styles == null ? new Map() : styles
        this.children = children == null ? [] : children
    }

    addStyle(style, value) {
        this.styles.set(style, value)
    }

    addAttribute(name, value) {
        this.attributes.set(name, value)
    }

    append(element) {
        this.children.push(element)
    }
    
    prepend(element) {
        this.children.unshift(element)
    }

    getHtml() {
        let elem = document.createElement(this.name)
        if (this.innerHtml != null) elem.innerHTML += this.innerHtml
        this.attributes.forEach((value, key) => elem.setAttribute(key, value) );
        this.styles.forEach((value, key) => elem.style[key] = value )
        this.children.forEach(child => elem.innerHTML += child.getHtml() )
        return elem.outerHTML
    }
}

class CssClass {
    constructor(className, styles = null) {
        this.className = className
        this.styles = styles == null ? new Map() : styles
    }

    addStyle(style, value) {
        this.styles.set(style, value)
    }

    removeStyle(style) {
        this.styles.delete(style)
    }

    getCSS() {
        let css = `.${this.className} {`
        this.styles.forEach((value, key) => css += `${key}: ${value};`)
        css += '}'
        return css
    }
}

if (false) {
    let wrapper = new HtmlElement('div', true)
    wrapper.addAttribute('id', 'wrapper')
    wrapper.addStyle('display', 'flex')

    let div = new HtmlElement('div', true, {styles: new Map([['width', '300px'], ['margin', '10px']])})
    let h3 = new HtmlElement('h3', true, {innerHtml: 'What is Lorem Ipsum?'})
    let img = new HtmlElement('img', false, {styles: new Map([['width', '100%']]), attributes: new Map([['alt', 'Lorem Ipsum'], ['src', './lipsum.gif']])})
    let p = new HtmlElement('p', true, {styles: new Map([['text-align', 'justify']])})
    let a = new HtmlElement('a', true, {innerHtml: 'More...', attributes: new Map([['href', 'https://www.lipsum.com/'], ['target', '_blank']])})
    p.innerHtml = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    p.append(a)
    div.append(h3)
    div.append(img)
    div.append(p)
    wrapper.append(div)
    wrapper.append(div)

    document.body.innerHTML = wrapper.getHtml()
}

if (true) {
    let codeBlock = new HtmlBlock()

    let wrapper = new HtmlElement('div', true)
    wrapper.addAttribute('id', 'wrapper')
    wrapper.addAttribute('class', 'wrap')
    wrapper.addStyle('display', 'flex')

    let div = new HtmlElement('div', true, {attributes: new Map([['class', 'block']])})
    let h3 = new HtmlElement('h3', true, {innerHtml: 'What is Lorem Ipsum?'})
    let img = new HtmlElement('img', false, {attributes: new Map([['class', 'img'], ['alt', 'Lorem Ipsum'], ['src', './lipsum.gif']])})
    let p = new HtmlElement('p', true, {attributes: new Map([['class', 'text']])})
    let a = new HtmlElement('a', true, {innerHtml: 'More...', attributes: new Map([['href', 'https://www.lipsum.com/'], ['target', '_blank']])})
    p.innerHtml = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    p.append(a)
    div.append(h3)
    div.append(img)
    div.append(p)
    wrapper.append(div)
    wrapper.append(div)

    let wrapStyle = new CssClass('wrap')
    wrapStyle.addStyle('display', 'flex')
    
    let blockStyle = new CssClass('block')
    blockStyle.addStyle('width', '300px')
    blockStyle.addStyle('margin', '10px')
    
    let imgStyle = new CssClass('img')
    imgStyle.addStyle('width', '100%')

    let textStyle = new CssClass('text')
    textStyle.addStyle('text-align', 'justify')

    codeBlock.addStyle(wrapStyle)
    codeBlock.addStyle(blockStyle)
    codeBlock.addStyle(imgStyle)
    codeBlock.addStyle(textStyle)

    codeBlock.addElement(wrapper)
    document.body.innerHTML = codeBlock.getCode()
}