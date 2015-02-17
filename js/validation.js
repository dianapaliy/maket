$().ready(function() {
    $("#subscribeForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            city: "required",
            street: "required",
            zip: {
                required: true,
                number: true
            },
            phone: "required"
        },
        messages: {
            firstname: "Enter firstname",
            lastname: "Enter lastname",
            city: "enter city",
            street: "enter street",
            zip: {
                required: "Enter zip",
                number: "Enter number"
            },
            phone: "enter phone number"
        }
    });
        $("#phone").mask("+7 (999) 999-99-99");
}
)
