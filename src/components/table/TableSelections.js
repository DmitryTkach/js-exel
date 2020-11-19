import {$} from "@core/Dom"

export class TableSelections {

    constructor() {
        this.cellsGroup = []
        this.rowsGroup = []
        this.selected = 'selected'
        this.current = null
    }

    select($cell){
        this.clear()
        this.current = $cell
        $cell.focus().addClass(this.selected, 'current-cell')
        this.cellsGroup.push($cell)

    }

    clear(){
        this.cellsGroup.forEach(($el) => {
            $el.removeClass(this.selected, 'first-cell', 'last-cell', 'current-cell')
            $(`[data-column='${$el.data('cell')}']`).removeClass(this.selected)
        })
        this.rowsGroup.forEach(($el) => $el.removeClass(this.selected, 'first-row', 'last-row'))
        this.cellsGroup = []
        this.rowsGroup = []
    }

    selectGroup($cells, $rowsGroup){
        this.clear()
        this.cellsGroup = $cells
        this.rowsGroup = $rowsGroup
        this.current.addClass('current-cell')
        this.cellsGroup.forEach((cell)=>{
            cell.addClass(this.selected)
            $(`[data-column='${cell.data('cell')}']`).addClass(this.selected)
        })
        this.rowsGroup.forEach((row)=>{
            row.addClass(this.selected)
        })

       this.rowsGroup[0].addClass('first-row')
       this.rowsGroup[this.rowsGroup.length -1].addClass('last-row')

       this.rowsGroup.forEach(($el) => {
           const cells = $el.all('.cell.selected')
           $(cells[0]).addClass('first-cell')
           $(cells[cells.length -1]).addClass('last-cell')
       })


    }

}
