import {Page} from "@core/Page";
import {$} from "@core/Dom";

export class Dashboard extends Page{

   constructor() {
       super()
       this.keys = []
   }

    getRecordsData() {
        const keys = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key.includes('excel')) keys.push(key)
        }
        this.keys = keys
    }

    getRecordsTemplate(){
       this.getRecordsData()
       if(!this.keys.length){
           return `<p>Нет записей</p>`
       }

        return this.keys.map((key)=>{
            const getDate = +key.replace('excel:','');
            const date = new Date(getDate).toLocaleDateString()
            const tableData = JSON.parse(localStorage.getItem(key))

            return `<div class="row">
                 <a href="#exel/${getDate}">
                    <div class="table-name">
                        <span class="material-icons icon">
                        description
                        </span>
                       ${tableData.tableName}
                    </div>
                    <div class="table-date">${date}</div>
                </a>
            </div>`
        })
    }



    getRooot(){
        const key = Date.now().toString()
        const $page = $.create('div', 'dasboard').html(
            `<section>
                    <header class="header"><h1>Exel Dashboard</h1></header>
                    <div class="container">
                        <div class="new-table">
                            <a href="#exel/${key}" class="add-table">
                                <span class="material-icons icon">add_circle_outline</span>
                                <div class="add-title">Add table</div>
                            </a>
                        </div>
                        <div class="tables-list">
                            <div class="table-header">
                                <div class="table-title">Название</div>
                                <div class="table-title">Дата создания</div>
                            </div>
                            ${this.getRecordsTemplate()}
                        </div>
                    </div>
            </section>`
        )
        return $page.html()

    }

    destroy(){

    }

}