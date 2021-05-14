function ListView(){

	var html;

	function init(){
		html = $("<div>"+
				"<h1 >Supercook: find your recipe</h1>"+
					"<fieldset><legend>Add some spice to your food !</legend>"+
						"<ul id='tasklist'></ul>"+
					"</fieldset>"+
				"<h2>Add a new recipe:</h2>"+
				"Add your ingredients <input id='taskinput' placeholder='I have to add…'/> <input id='submittask' type='submit' value='Add'/>"+
				"</div>");
	}

	var public = {
		getHtml: function(){
			return html;
		},
		addCreateTaskHandler: function(handler){
			html.find("#submittask").click(function(){
				var newTaskTitle = html.find("#taskinput").val();
				html.find("#taskinput").val("");
				handler(newTaskTitle);
			});
		},
		addTask: function(taskView){
			html.find("#tasklist").append(taskView.getHtml());
		}
	}

	init();
	return public;

}
