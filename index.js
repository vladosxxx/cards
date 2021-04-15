


function findCard(elem, table) {
    // let table = document.getElementById('table')
    let x = elem.parentNode.rowIndex
    let y = elem.cellIndex
    let card = elem.textContent
    console.log(card, table)

    // for(let i = 0; i < 7; i++){
    //     for(let j = 0; j < 6; j++){
    //
    //         while(table.rows[i].cells[j].textContent === elem.textContent && i === x){
    //             j++
    //             console.log('yeah')
    //         }
    //
    //     }
    // }
    // console.log('here ',table.rows[x].cells[y].textContent)
    // isHorizontalUp(x, y, elem, table)
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
    let table = []
    for(let i = 0; i < 7; i++){
        let tr = tbl.insertRow()
        tr.style.height = '50px'
        table[i] = []
        for(let j = 0; j < 6; j++){
                let td = tr.insertCell();
                let randomCard = cards[Math.floor(Math.random() * cards.length)]
                td.innerHTML = randomCard
                table[i][j] = randomCard
                td.addEventListener('click', e => {
                    let elem = e.target
                    findCard(elem, table)
                    elem.style.backgroundColor = 'red'
                })
                td.style.cursor = 'pointer'
                td.style.fontSize = '20pt'
                td.style.textAlign = 'center'
                td.style.border = '1px solid black'
        }
    }
    // console.log(table)
    body.appendChild(tbl)
}
tableCreate()

