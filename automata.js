/**
 * Created by tineo on 22/02/17.
 */

//(.*)[a][a][b][a][b]

$(function() {

    $("#texto2").keyup(function() {
        var patt = new RegExp("(.*)[a][a][b][a][b]");
        if(patt.test(this.value)){
            $("#check2").addClass("circular-ok").removeClass("circular-error");
        }else{
            $("#check2").addClass("circular-error").removeClass("circular-ok");
        }
    });

    $("#texto3").keyup(function() {
        var patt = new RegExp("(.*)[a][b][a][b][a]");
        if(patt.test(this.value)){
            $("#check3").addClass("circular-ok").removeClass("circular-error");
        }else{
            $("#check3").addClass("circular-error").removeClass("circular-ok");
        }
    });



    // EXTRA

    $("#textoextra").keyup(function() {
        var patt = new RegExp($("#textoregex").val());
        if(patt.test(this.value)){
            $("#checkex").addClass("circular-ok").removeClass("circular-error");
        }else{
            $("#checkex").addClass("circular-error").removeClass("circular-ok");
        }
    });

    $("#textoregex").keyup(function() {
        var patt = new RegExp($("#textoregex").val());
        if(patt.test(this.value)){
            $("#checkex").addClass("circular-ok").removeClass("circular-error");
        }else{
            $("#checkex").addClass("circular-error").removeClass("circular-ok");
        }
    });

});
