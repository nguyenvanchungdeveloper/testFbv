(function($) {
    // Form material
    function inputFocusCheck(element) {
        //var $label = $(element).siblings('label');
        if ($(element).val().length > 0) {
            $(element).addClass('has-value');
        } else {
            $(element).removeClass('has-value');
        }
    }
    // The lines below are executed on page load
    $('.material-form .form-control').each(function () {
        inputFocusCheck(this);
    });
    // The lines below (inside) are executed on change & keyup
    $('.material-form .form-control').on('change keyup', function () {
        inputFocusCheck(this);
    });
})(jQuery);