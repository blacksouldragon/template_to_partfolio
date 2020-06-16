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