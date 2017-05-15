$(document).ready(function () {


    $("#college").hide();

    $("#moocs-btn").click(function () {

        $("#moocs").slideDown();
        $('#college').slideUp();

        console.log('hi im working aho 1');
    });
    
    $("#formaledu-btn").click(function () {

        $("#college").slideDown();
        $('#moocs').slideUp();

        console.log('hi im working aho 2');
    });


    console.log('hi im working aho 3');

});
