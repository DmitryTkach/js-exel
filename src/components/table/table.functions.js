
export function isCell(event){
    return event.target.dataset.type === 'cell'
}

export function getRange(start, end){
    if(start > end) {
        [end, start] = [start, end]
    }
    return new Array(end - start+1).fill('').map((_, index) => {
        return start + index
    })
}

export function getSelectedItems(current, target){
    const cols = getRange(current.cell, target.cell)
    const rows = getRange(current.row, target.row)
    return rows.reduce((acc, row) => {
        cols.forEach((col) => acc.push(`${row}:${col}`))
        return acc
    }, [])
}

export function getSelectedRows(current, target){
    const rows = getRange(current.row, target.row)
    return rows.reduce((acc, row) => {
        acc.push(row)
        return acc
    }, [])
}


export function nextSelector(rowId, cellId, key, rowsCount){
    const min = 0
    const maxRow = rowsCount -1
    const maxCell = 25
    switch (key) {
        case 'ArrowUp':
            rowId = rowId - 1 < min ? min : rowId - 1
            break
        case 'ArrowRight':
            cellId = cellId + 1 > maxCell ? maxCell : cellId + 1
            break
        case 'ArrowDown':
        case 'Enter':
            rowId = rowId + 1 > maxRow ? maxRow : rowId + 1
            break
        case 'ArrowLeft':
            cellId = cellId - 1 < min ? min : cellId - 1
            break
    }

    return `[data-id="${rowId}:${cellId}"]`

}
