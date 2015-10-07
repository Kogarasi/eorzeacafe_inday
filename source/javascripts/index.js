var _today = new Date();
var _tomorrow = new Date( _today.getTime() + 24*60*60*1000 );
var today = (_today.getMonth()+1) + "/" + _today.getDate();
var tomorrow = (_tomorrow.getMonth()+1) + "/" + _tomorrow.getDate();

var time_program = {
	"11:30": "first",
	"14:00": "second",
	"16:30": "third",
	"19:00": "fourth"
};
var person_program = [ "one-person", "two-person", "four-person" ];

$(function(){
	$.getJSON( "http://ecafe-inday.kogarasi.com", loading );

	$( ".today-date" ).text( today );
	$( ".tomorrow-date" ).text( tomorrow );
});

function loading( data ){

	
	$.each( data, function( key, val ){
		var keys = key.split( "-" );
		setStatus( keys, val );
	});
}

function setStatus( keys, state ){
	var key_date = keys[0];
	var person = Math.log2( keys[2] );

	if( key_date == today ) {
		var _class = ".today-card ." + time_program[ keys[ 1 ] ] + " ." + person_program[ person ];

		if( state ){
			var obj = $( _class );
			obj.find( "h2 " ).text( "OK!!" );
			obj.addClass( "today-ok" );
			obj.removeClass( "today-ng" );
		}
	} else if ( key_date == tomorrow ) {
		var _class = ".tomorrow-card ." + time_program[ keys[ 1 ] ] + " ." + person_program[ person ];

		if( state ){
			var obj = $( _class );
			obj.find( "h2 " ).text( "OK!!" );
			obj.addClass( "today-ok" );
			obj.removeClass( "today-ng" );
		}
	}
}
