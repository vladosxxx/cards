
function isVerticalRight(x, y, elem, table) {
    if(table.rows[x].cells[y+1].textContent === elem.textContent){
        table.rows[x].cells[y+1].style.backgroundColor ='red'
        return isVerticalRight(x, y+1, elem, table)
    }
    else {
        return isHorizontalDown(x, y, elem, table)
    }
}
function isVerticalLeft(x, y, elem, table) {
    if(table.rows[x].cells[y-1].textContent === elem.textContent){
        table.rows[x].cells[y-1].style.backgroundColor ='red'
        return isVerticalLeft(x, y-1, elem, table)
    }else {
        return isVerticalRight(x, y, elem, table)
    }
}
function  isHorizontalDown(x, y, elem, table){
    if(table.rows[x+1].cells[y].textContent === elem.textContent){
        table.rows[x+1].cells[y].style.backgroundColor ='red'
        return isHorizontalDown(x+1, y, elem, table)
    }else{
        isVerticalLeft(x, y, elem, table)
    }
}
function isHorizontalUp(x, y, elem, table) {
    if(table.rows[x-1].cells[y].textContent === elem.textContent){
        table.rows[x-1].cells[y].style.backgroundColor ='red'
        return isVerticalLeft(x-1, y, elem, table)
    }
    else {
        return isHorizontalDown(x, y, elem,table)
    }
}
function findCard(elem) {
    let table = document.getElementById('table')
    let x = elem.parentNode.rowIndex
    let y = elem.cellIndex
    // console.log('here ',table.rows[x].cells[y].textContent)
    isHorizontalUp(x, y, elem, table)
    // table.rows[y].cells[x].style.backgroundColor = 'blue'
}

function tableCreate(){
    const cards = ['&#9824', '&#9827','&#9829', '&#9830']
    let body = document.getElementById('App'),
        tbl  = document.createElement('table')
    tbl.setAttribute('id', 'table')
    tbl.style.width  = '400px';
    tbl.style.borderCollapse = 'collapse'
    tbl.style.border = '1px solid black'

    for(let i = 0; i < 7; i++){
        let tr = tbl.insertRow()
        tr.style.height = '50px'
        for(let j = 0; j < 6; j++){
                let td = tr.insertCell();
                td.innerHTML = cards[Math.floor(Math.random() * cards.length)]
                td.addEventListener('click', e => {
                    let elem = e.target
                    findCard(elem)
                    elem.style.backgroundColor = 'red'
                })
                td.style.cursor = 'pointer'
                td.style.fontSize = '20pt'
                td.style.textAlign = 'center'
                td.style.border = '1px solid black'
        }
    }
    body.appendChild(tbl)
}
tableCreate()

