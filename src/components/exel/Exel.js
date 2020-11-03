import {$} from "@core/Dom"

export class Exel{
    constructor(selector, options) {
        this.$app = $(selector)
        this.components = options || []
    }

    getBase(){
        const $main = $.create('div', 'exel')
        this.instances = []
        this.components.forEach((element) => {
            const $section = $.create('section', element.className)
            const component = new element.component($section)

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



}
