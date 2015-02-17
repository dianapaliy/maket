$().ready(function() {
    $("#subscribeForm").validate({
        messages: {
            firstname: "Enter firstname",
            lastname: "Enter lastname",
            city: "enter city",
            street: "enter street",
            zip: {
                required: "Enter zip",
                digits: "numbers!!!"
            },
            phone: "enter phone number"
        },
        errorPlacement: function(error, element) {
            offset = element.offset();
            error.css('display', 'none');   
        }
    });
    $("#phone").mask("+7 (999) 999-99-99");

    $('#subscribeForm').submit(function() {

        $('#subscribeForm').addClass('error-on-submit');

    });
}
)
