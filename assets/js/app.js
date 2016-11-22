(function($){
    
    $(function(){
        $("#listDemos").load("/demo/listdemos")
    });
    
    $(function(){
        $("#newDemo").load("/demo/new");
    });
    
    $(function(){
        $("#listStations").load("/station/liststations");
    });
    $(function(){
        $("#uploadStations").load("/station/loadstations");
    });
   
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

})(jQuery);



   function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    console.log("in function");
   }

