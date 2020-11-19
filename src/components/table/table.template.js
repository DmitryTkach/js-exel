export function createTable(rowsCount = 15){
    const codes = {
        A: 65,
        Z: 90
    }

    const cellsCount = codes.Z - codes.A + 1

    function createHeader(codes){
        let headers = []
        for (let i = 0; i < cellsCount; i++){
            headers.push(`<div class="cell" data-type="column" data-cell="${i}" data-column="${i}">
                            ${String.fromCharCode(codes.A+i)}
                            <div class="cell-resizer" data-resize="column"></div>
                          </div>`)
        }
        return `
        <div class="row table-header">
            <div class="row-id"></div>
            <div class="row-data">${ headers.join('') }</div>
        </div>
        `
    }

    function createRows(rowsCount){
        const rows = new Array(rowsCount).fill('').map((_, index) => {
            return `
            <div class="row" data-type="row" data-id="${index}">
                <div class="row-id">
                    ${index+1}
                    <div class="cell-resizer" data-resize="row"></div>
                    </div>
                    <div class="row-data">${ createCells(index) }</div>
                </div>
            </div>
            `
        })
        return rows.join('')
    }
    function createCells(rowId){
        const cells = new Array(cellsCount).fill('').map((_, index) => {
            return `<div class="cell"
                         contenteditable="true"
                         data-type="cell"
                         data-cell="${index}"
                         data-id="${rowId}:${index}">
                    </div>`
        })
        return cells.join('')
    }

    return `
        ${ createHeader(codes) }
        ${ createRows(rowsCount) }
    `
}
