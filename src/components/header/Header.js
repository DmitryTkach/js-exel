import {ExelComponent} from "@core/ExelComponent";

export class Header extends ExelComponent{
    constructor($root) {
        super($root, {
             name: 'header',
            // listeners: ['input']
        })
    }

    toHtml() {
        return `
        <!-- Header -->
        <div class="title">
            <span class="material-icons icon">description</span>
            <input type="text" class="input" value="Новая таблица" placeholder="Новая таблица">
        </div>
        <div class="controls">
            <button class="btn">
                <span class="material-icons icon">delete</span>
            </button>
            <button class="btn">
                <span class="material-icons icon">exit_to_app</span>
            </button>
        </div>
        `
    }
}