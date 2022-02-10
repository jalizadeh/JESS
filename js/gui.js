$('#setFen').on("click", function(){
    var fenStr = $('#fenIn').val()
    
    if(!fenStr.length){
        alert("Please insert a valid FEN")
        return
    } 
    
    ParseFen(fenStr)
    PrintBoard()
})


$('#clearFen').on("click",function(){
    $('#fenIn').val('')
})