import {$} from "@core/Dom";

export function tableResize(event, $root) {
    const resizeType = event.target.dataset.resize
    if(resizeType) {
        const  $resizer = $(event.target)
        const  $resizeEl = $resizer.closest(`[data-type="${resizeType}"]`)
        const  baseCoords = $resizeEl.coords
        let    newSize
        $resizer.css({left:'auto',top:'auto'}).addClass('active')

        /********** MOUSE MOVE ***********/
        document.onmousemove = (event) => {
            if(resizeType === 'column'){
                const delta = event.pageX - baseCoords.right
                newSize = $resizeEl.coords.width + delta
                $resizer.css({left:`${(baseCoords.width+delta) - 2}px`})

            }else{
                const delta = event.pageY - baseCoords.bottom
                newSize = $resizeEl.coords.height + delta
                $resizer.css({top:`${(baseCoords.height+delta) - 2}px`})
            }

        }

        /********** MOUSE UP ***********/
        document.onmouseup = () => {
            const position = $resizeEl.$el.dataset.position
            $resizer.removeClass('active')
            document.onmousemove = null
            document.onmouseup = null

            if(resizeType === 'column') {
                const cells = $root.all("[data-type='cell']")
                $resizeEl.css({width:`${newSize}px`})
                cells.forEach((cell) => {
                    const cellPosition = cell.dataset.position
                    if (cellPosition === position) $(cell).css({width: `${newSize}px`})
                })
            }
            else $resizeEl.css({height: `${newSize}px`})
        }
    }
}