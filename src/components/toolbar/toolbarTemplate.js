export function  generateToolbar() {
    const buttons = [
        {
            icon: 'format_align_left',
            active: true,
            groupId: '0',
            action:{textAlign: 'Left'}
        },
        {
            icon: 'format_align_justify',
            active: false,
            groupId: '0',
            action:{textAlign: 'center'}
        },
        {
            icon: 'format_align_right',
            active: false,
            groupId: '0',
            action:{textAlign: 'right'}
        },
        {
            icon: 'format_bold',
            active: true,
            groupId: '1',
            action:{fontWeight: 'bold'}
        },
        {
            icon: 'format_italic',
            active: false,
            groupId: '1',
            action:{fontWeight: 'italic'}
        },
        {
            icon: 'format_underline',
            active: false,
            groupId: '1',
            action:{textDecoration: 'underline'}
        }
    ]

   const groups = {}
   let combineGroupHtml = ''

    buttons.forEach((button)=> {
        const id = button.groupId
        if (!groups[id]) {
            groups[id] = []
            groups[id].push(button)
        }
        else{groups[id].push(button)}
    })

   Object.values(groups).forEach((group)=>{
       combineGroupHtml += `<div class="group">${getGroupHtml(group)}</div>`
   })

   function getGroupHtml(group){
       return group.map((button)=>{
            return `<button class="btn btn-sm ${button.active ? 'active' : ''}" data-type="button" data-action='${JSON.stringify(button.action)}'>
                     <span class="material-icons icon iconBtn" data-type="button" data-action='${JSON.stringify(button.action)}'>${button.icon}</span>
                    </button>`
        }).join('')
    }
   return combineGroupHtml
}
