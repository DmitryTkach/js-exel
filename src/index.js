import './scss/style.scss'
import {Exel} from "@src/components/exel/Exel";
import {Header} from "@src/components/header/Header";
import {Formula} from "@src/components/formula/Formula";
import {Toolbar} from "@src/components/toolbar/Toolbar";
import {Table} from "@src/components/table/Table";

const excel = new Exel('#app', [
    {component: Header, className:'exel-header'},
    {component: Toolbar, className:'exel-toolbar'},
    {component: Formula, className:'exel-formula'},
    {component: Table, className:'exel-table'}
])

excel.render()

