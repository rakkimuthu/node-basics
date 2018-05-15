function deletecustomer(id){
    if(confirm("are you sure?")){
        $.ajax({
            type:"delete",
            url:'../firms/'+id,
        });
    }
}