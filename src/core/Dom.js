export class Dom{
    constructor(selector){
        this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
    }

    html(html){
        if (typeof html === 'string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.innerHTML.trim()
    }

    clear(){
        this.html('')
        return this
    }

    append(node){
        if (node instanceof Dom){
            node = node.$el
            this.$el.append(node)
        }else{
            this.$el.append(node)
        }
        return this
    }

    on(event, callback){
        this.$el.addEventListener(event, callback)
    }
    off(event, callback){
        this.$el.removeEventListener(event, callback)
    }



}

export function $(selector){
    return new Dom(selector)
}


$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if(classes) el.classList = classes
    return $(el)
}



