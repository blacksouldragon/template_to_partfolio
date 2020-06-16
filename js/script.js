$(".open").click(function() {
    $('.text').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".open").length) {
        $('.text').hide();
    }
    e.stopPropagation();
});
$(".open1").click(function() {
    $('.text1').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".open1").length) {
        $('.text1').hide();
    }
    e.stopPropagation();
});
$(".open2").click(function() {
    $('.text2').toggle();
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".open2").length) {
        $('.text2').hide();
    }
    e.stopPropagation();
});
///////////////////
$(function() {
    $('#open').click(function(event) {
        $('#text').toggle();
    });
    $(document).click(function (event) {
        if ($(event.target).closest('#text').length == 0 && $(event.target).attr('id') != 'open') {
            $('#text').hide();
        }
    });
});
$(function() {
    $('#open1').click(function(event) {
        $('#text1').toggle();
    });
    $(document).click(function (event) {
        if ($(event.target).closest('#text1').length == 0 && $(event.target).attr('id') != 'open1') {
            $('#text1').hide();
        }
    });
});
$(function() {
    $('#open2').click(function(event) {
        $('#text2').toggle();
    });
    $(document).click(function (event) {
        if ($(event.target).closest('#text2').length == 0 && $(event.target).attr('id') != 'open2') {
            $('#text2').hide();
        }
    });
});