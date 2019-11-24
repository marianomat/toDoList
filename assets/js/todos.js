// Interlinear cuando clickeas cada item en lista y ponerlo gris.

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
})

// click en la x para eliminar item

$("ul").on("click", "span", function (element) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    })

    element.stopPropagation()
})


$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
       let todoText = $(this).val() //agarras el value del input
       $(this).val("")

       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

    }
}) 


$(".fa-plus").click(function()
{
    $("input[type='text']").fadeToggle()
})