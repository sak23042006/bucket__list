var bucketlist=[]

var listcontainer= document.querySelector("#list-container")

function addValues() {
    var value=document.querySelector("#input-field").value
    bucketlist.push(value)
    displaylist()
    
}

function displaylist() {

    listcontainer.innerHTML=""
    for (let i = 0; i < bucketlist.length; i++) {
    var li =document.createElement("li")
    li.innerHTML=bucketlist[i] + `<span onclick=remove()><img src= "https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt="tick img"</span>`
    listcontainer.append(li)
    }

}

function reset() {
    bucketlist=[]
    displaylist()
    
}

function remove(idx) {
    bucketlist.splice(idx,1)
    displaylist()
}