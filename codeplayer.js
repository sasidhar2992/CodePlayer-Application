
var windowHeight=$(window).height();// gets the complete browser window height
var menuBarHeight=$("#menu-bar").height();
var codeContainerHeight=windowHeight-menuBarHeight;
$(".codeContainer").height(codeContainerHeight+"px");// container height in terms of px
$(".toggle").click(function(){     //toggle class does the vice versa of in and out
$(this).toggleClass("selected");
var activeDiv=$(this).html();
$("#"+activeDiv+"Container").toggle();
var showingDivs=$(".codeContainer").filter(function(){
return($(this).css("display")!="none");
}).length;
var width=100/showingDivs;
$(".codeContainer").width(width+"%");
});
$("#runButton").click(function(){    //on click display the the code output
$("iframe").contents().find("html").html('<style>'+$("#CSSCode").val()+'</style>'+$("#HTMLCode").val());
document.getElementById("result").contentWindow.eval($("#JSCode").val());
//eval($("#JSCode").val());
});
