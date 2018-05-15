$(document).ready(function(){
	$("#vehicle_id").on("change",function(){
		var vehicle_id = $(this).val();
		$.ajax({
			type:"POST",
			url :"../controller/get_pricing_column.php",
			data:{id:vehicle_id},
			success:function(data){
				// console.log(data);
				$("#table").html(data);
			}
		});
	});
});