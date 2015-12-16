$(document).ready(function () {
    function postToApi(platformId) {
        try {
            var formdata = new FormData($('#imageFileInputForm')[0]);
            $.ajax({
                url: '/api/image',
                type: 'POST',
                data: formdata,
                accepts: "application/json",
                success: function (req) {
                    $("body").append("<iframe src='" + req.Uri + "' style='display: none;' ></iframe>");
                },
                error: function (req, err) {
                    var resp = JSON.parse(req.responseText);
                    alert(resp.Message);
                },
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false
            });

        } catch (e) {
            alert(e);
        }
    };
    $('#downloadButton').click(function (e) {
        postToApi('whatever');
    });
    
    $('#fileInput').change(function(e) {
        //if new value is valid
        if (e.currentTarget.value) {
            $('#downloadButton').prop('disabled', false);
        } else {
            $('#downloadButton').prop('disabled', true);
        }
    });
});    
