$(document).ready(function(){
  $("#meni").click(function(){
    $("#donjiM").slideToggle(400);
  });
  $("#donjiM nav ul li").hover(function(){
  	$(this).css({"border-bottom" : "6px solid #A03021", "padding-top" : "10px"});
  	},
  	function(){
  	$(this).css({"border-bottom" : "none", "padding-top" : "15px"});
  });
  $("#opis").hover(function(){
  	$(this).animate({'background-size': '105%'}, 1000);
    $(this).queue();
  	},
  	function(){
  	$(this).animate({'background-size': '100%'}, 1000);
    $(this).finish();
  });
  $(".oglas").hover(function(){
  	$(this).animate({'background-size': '120%'}, 1000);
    $(this).queue();
    },
    function(){
    $(this).animate({'background-size': '100%'}, 1000);
    $(this).finish();
  });
  $(".podM a li").hover(function(){
    $(this).css({"color": "black"});
    },
    function(){
    $(this).css({"color": "#A03021"});
  });
  $("#manjePrikaz").hover(function(){
    $(this).css({"background-color": "#A03021", "color" : "white"});
  },
  function(){
    $(this).css({"background-color": "white", "color" : "#A03021"});
  });
  $("#vecePrikaz").hover(function(){
    $(this).css({"background-color": "#A03021", "color" : "white"});
  },
  function(){
    $(this).css({"background-color": "white", "color" : "#A03021"});
  });
  $("#manjePrikaz").click(function(){
    $(".proizvod").css({"width" : "500px", "height" : "500px"});
  });
  $("#vecePrikaz").click(function(){
    $(".proizvod").css({"width" : "350px", "height" : "500px"});
  });
});