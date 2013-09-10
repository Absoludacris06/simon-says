$(document).ready(function(){
	$("#get_color").on("click", function(e) {
		e.preventDefault();
		$.ajax({
			type: "post",
			url: "/color"
		}).done(function(server_response){
			console.log("SUCCESS");
			change_cell_color(server_response.cell, server_response.color);	
		}).fail(function(){
			console.log("FAIL");
		});
	});
});

var change_cell_color = function(cell, color) {
	$("#color_me li:nth-child(" + cell + ")").css("background-color", color);
}