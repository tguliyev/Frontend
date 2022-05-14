$(() => {
    const bold = $('#bold')
    const italic = $('#italic')
    const underline = $('#underline')
    const text = $('#text')
    const fonts = $('#fonts')
    const colors = $('#colors')

    bold.click(() => text.toggleClass('bold'))
    italic.click(() => text.toggleClass('italic'))
    underline.click(() => text.toggleClass('underline'))
    fonts.change(() => text.css({fontFamily: $(fonts).val()}))
    colors.change(() => text.css({color: $(colors).val()}))

    fonts.val('monospace')
    colors.val('black')
})