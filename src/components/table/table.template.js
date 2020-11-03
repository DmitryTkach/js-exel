export function createTable(rowsCount = 15){
    const codes = {
        A: 65,
        Z: 90
    }

    const cellsCount = codes.Z - codes.A + 1

    function createHeader(codes){
        let headers = []
        for (let i = 0; i < cellsCount; i++){
            headers.push(`<div class="cell">${String.fromCharCode(codes.A+i)}</div>`)
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
            <div class="row">
                <div class="row-id">${index+1}</div>
                    <div class="row-data">${ createCells(cellsCount) }</div>
                </div>
            </div>
            `
        })
        return rows.join('')
    }

    function createCells(cellsCount){
        const cells = new Array(cellsCount).fill('').map((_, index) => {
            return `<div class="cell" contenteditable="true"></div>`
        })
        return cells.join('')
    }

    return `
        ${ createHeader(codes) }
        ${ createRows(rowsCount) }
    `
}
