import {$} from "@core/Dom"
import {Emitter} from "@core/Emitter";

export class Exel{
    constructor(selector, options) {
        this.$app = $(selector)
        this.components = options || []
        this.emiter = new Emitter()
    }

    getBase(){
        const $main = $.create('div', 'exel')
        const componentOptions = {
            emitter: this.emiter
        }
        this.instances = []
        this.components.forEach((element) => {
            const $section = $.create('section', element.className)
            const component = new element.component($section, componentOptions)

            $section.html(component.toHtml())
            $main.append($section)
            return this.instances.push(component)
        })
        return $main
    }

    render(){
        this.$app.append(this.getBase())
        this.instances.forEach( (component) => {
            component.init()
        })
    }

    destroy(){
        this.instances.forEach( (component) => {
            component.destroy()
        })
    }



}
