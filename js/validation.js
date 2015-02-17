$().ready(function() {
    $("#subscribeForm").validate({
        messages: {
            firstname: "Enter firstname",
            lastname: "Enter lastname",
            city: "enter city",
            street: "enter street",
            zip: {
                required: "Enter zip"
            },
            phone: "enter phone number"
        }
    });
        $("#phone").mask("+7 (999) 999-99-99");
}
)
