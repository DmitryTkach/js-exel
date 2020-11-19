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
    text(text){
        if (typeof text === 'string'){
            this.$el.textContent = text
            return this
        }

        return this.$el.textContent.trim()
    }

    clear(){
        this.html('')
        return this
    }

    all(selector){
        return this.$el.querySelectorAll(selector)
    }

    next(){
        return $(this.$el.nextSibling)
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

    data(name){
        return this.$el.dataset[name]
    }

    dataId(parse){
        if(parse){
            const parsed = this.dataId().split(':')
            return { row: +parsed[0], cell: +parsed[1] }
        }
        return this.$el.dataset.id
    }

    addClass(...args){
        args.forEach((className)=>{
            if (typeof className !== 'string') throw new Error('"removeClass method" - css class names must be a string')
            this.$el.classList.add(className)
        })
        return this
    }
    removeClass(...args){
        args.forEach((className)=>{
            if (typeof className !== 'string') throw new Error('"removeClass method" - css class names must be a string')
            this.$el.classList.remove(className)
        })
        return this
    }
    css(styles){
        if (typeof styles !== 'object') throw new Error('"css method" - styles data must be in object type')
        Object.keys(styles).forEach((key) => this.$el.style[key] = styles[key])
        return this
    }

    find(selector){
        return $(this.$el.querySelector(selector))
    }

    on(event, callback){
        this.$el.addEventListener(event, callback)
    }
    off(event, callback){
        this.$el.removeEventListener(event, callback)
    }

    focus(){
        this.$el.focus()
        return this
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




