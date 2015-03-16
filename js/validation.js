$().ready(function() {
    $("#subscribeForm").validate();
    $("#phone").mask("+7 (999) 999-99-99");

    $('#subscribeForm').submit(function() {

        $('#subscribeForm').addClass('error-on-submit').removeClass("subscribe-form");

    });

    $('#zip').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $('.js-link').on('click', function(e){
        e.preventDefault();

        var $show = $(this).find('.js-show'),
            $hide = $(this).find('.js-hide');

        if($show.css('display') == 'inline-block'){
            $show.hide();
            $hide.css({'display': 'inline-block'});
            $('.js-hide-block').show();

            $('#age').bind("change keyup input click", function() {
                if (this.value.match(/[^0-9]/g)) {
                    this.value = this.value.replace(/[^0-9]/g, '');
                }
            });
        }
        else{
                $hide.hide();
                $show.css({'display': 'inline-block'});
                $('.js-hide-block').hide();
        }
    });

}
);
