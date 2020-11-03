import {ExelComponent} from "@core/ExelComponent";

export class Toolbar extends ExelComponent{
    constructor($root) {
        super($root, {
            name: 'toolbar',
            listeners: ['click']
        })
    }


    onClick(event){
        if(event.target.classList.contains('iconBtn')) console.log(event.target)
    }


    toHtml() {
        return `
            <!-- Toolbar -->
            <div class="group">
                <button class="btn btn-sm">
                    <span class="material-icons icon iconBtn">format_align_left</span>
                </button>
                <button class="btn btn-sm">
                    <span class="material-icons icon iconBtn">format_align_justify</span>
                </button>
                <button class="btn btn-sm">
                    <span class="material-icons icon iconBtn">format_align_right</span>
                </button>
            </div>
            <div class="group">
                <button class="btn btn-sm">
                    <span class="material-icons icon">format_bold</span>
                </button>
                <button class="btn btn-sm">
                    <span class="material-icons icon">format_italic</span>
                </button>
                <button class="btn btn-sm">
                    <span class="material-icons icon">format_underline</span>
                </button>
            </div>
        `
    }
}