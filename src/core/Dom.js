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

    all(selector){
        return this.$el.querySelectorAll(selector)
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

    closest(selector){
        return $(this.$el.closest(selector))
    }

   get coords(){
        return this.$el.getBoundingClientRect()
    }

    addClass(classes){
        if (typeof classes !== 'string') throw new Error('"addClass method" - css class names must be a string')
        this.$el.classList.add(classes)
        return this
    }
    removeClass(classes){
        if (typeof classes !== 'string') throw new Error('"removeClass method" - css class names must be a string')
        this.$el.classList.remove(classes)
        return this
    }

    css(styles){
        if (typeof styles !== 'object') throw new Error('"css method" - styles data must be in object type')
        Object.keys(styles).forEach((key) => this.$el.style[key] = styles[key])
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




