import {ExelComponent} from "@core/ExelComponent";
import {createTable} from "@src/components/table/table.template";
import {tableResize} from "@src/components/table/table.resize";
import {TableSelections} from "@src/components/table/TableSelections";
import {isCell, getSelectedItems, getSelectedRows, nextSelector} from "@src/components/table/table.functions";
import {$} from "@core/Dom"
import * as actions from "@src/redux/actions";



export class Table extends ExelComponent{
    constructor($root, options) {
        super($root, {
            name: 'table',
            listeners: ['mousedown', 'keyup', 'keydown', 'input'],
            ...options
        })
        this.$root = $root
        this.rowsCount = 20
    }


    prepare() {
        this.selection = new TableSelections()
    }

    init(){
        super.init()
        const $baseCell = this.root.find('[data-id="0:0"]')

        this.selection.select($baseCell)
        this.emit('tableSelectCell', $baseCell)

        this.subscribe('formulaInput', (text) => {
            this.selection.current.text(text)
            const data = {
                currentText:text,
                id: this.selection.current.data('id'),
                value: text
            }
            this.dispatch(actions.textAction(data))
        })

        this.subscribe('formulaEnter', () => {
            this.selection.current.focus()
        })

        this.subscribe('Tab', () => {
            const $nextCell = this.selection.current.next()
            this.selection.select($nextCell)
            this.emit('tableSelectCell', $nextCell)
        })


    }

    onInput(event){
        if(event.target.dataset.type === 'cell'){
            this.emit('cellInput', $(event.target))
            const currentCell = this.selection.current
            const data = {
                currentText: this.selection.current.text(),
                id:currentCell.data('id'),
                value:currentCell.html()
            }
            this.dispatch(actions.textAction(data))
        }
    }

    onKeydown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            this.emit('Tab')
        }
    }

    onKeyup(event){
        const keys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Enter']
        const {key} = event

        if(keys.includes(key)) {
            event.preventDefault()
            const current = this.selection.current.dataId(true)
            const $nextCell = this.root.find(nextSelector(current.row, current.cell, key, this.rowsCount))
            this.selection.select($nextCell)
            this.emit('tableSelectCell', $nextCell)
        }

    }

    async resize(event){
        const data = await tableResize(event, this.$root)
        this.dispatch(actions.resizeAction(data))
    }
    onMousedown(event){
        this.resize(event, this.$root)
        if (isCell(event)){
            /*** Group selection ***/
            document.onmousemove = (event) => {if (isCell(event)) this.groupSelection(event)}
            document.onmouseup = (event) =>  document.onmousemove = null

            if(event.shiftKey){
                this.groupSelection(event)
                document.onkeypress = (event) => {
                    this.currentCell.focus()
                }
            }else{
                /*** Single selection ***/
                this.selection.select($(event.target))
                this.emit('tableSelectCell', $(event.target))
                document.onkeypress = null
            }

        }
    }

     groupSelection(event){
        const current = this.selection.current.dataId(true)
        const target = $(event.target).dataId(true )
        const $cells = getSelectedItems(current, target).map((id) => this.root.find(`[data-id="${id}"]`))
        const $rows = getSelectedRows(current, target).map((id) => this.root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells, $rows)
        this.currentCell = this.root.find(`[data-id="${current.row}:${current.cell}"]`)
     }



    toHtml() {
        return createTable(this.rowsCount, this.store.getState())
    }

}
