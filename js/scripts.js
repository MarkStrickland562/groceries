$(document).ready(function() {

 var groceries = [];

  $("form#response").submit(function(event) {
    event.preventDefault();

    var grocery = $("input#Item").val();

    groceries.push(grocery);

    $("input#Item").val("");
  	});

  $("form#submit").submit(function(event) {
    event.preventDefault();

    groceries.sort();

    var upperGroceries = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });

    upperGroceries.forEach(function(grocery) {
      $('ul#grocery').append('<li>' + grocery+ '</li>');
    });
	});
});
