$('input[type="radio"]').on('change', function() {
    $(this).siblings('input[type="radio"]').not(this).prop('checked', false);
 });