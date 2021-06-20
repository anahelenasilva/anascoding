var Site = (function () {

	function enviarEmail(){
		var url = "http://anascoding.cloudapp.net/api/Mailer/SendMail";
		//var url = "http://localhost:52496/api/Mailer/SendMail";
		
		$.ajax({
            cache: false,
            url: url,
            type: "POST",
            data: { Nome: $("#InputName").val(), Email: $("#InputEmail").val(), Assunto: $("#InputSubject").val(), Mensagem: $("#message-text").val() },
            async: true,
            beforeSend: function(bs) { //bullshit
            	//loading(true);
            },
            success: function (data) {
                alert("Obrigada! Entrarei em contato ASAP :)");
            },
            error: function (err) {
                alert("Ocorreu um erro, mas tentarei arrumar ASAP! Enquanto isso, você pode entrar em contato comigo por outras redes que te responderei :)", "Oops");  
            },
            complete: function (e) {
            	//loading(false);
            }
        });
	}

	 function loading(action) {
        var loadTemplate = '<div class="loading-main">'
                         + '    <div class="loading-panel"></div>'
                         + '    <div class="progress progress-striped active loading" style="width: 10%">'
                         + '        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">Carregando...</div>'
                         + '    </div>'
                         + '</div>';

        if (action) {
            $("#main-wrapper").before(loadTemplate);
            $(".loading-main").show();
        } else {
            $(".loading-main").hide();
            $(".loading-main").remove();
        }
    }

	return {
		enviarEmail: function() {
			enviarEmail();
		},

		loading: function(action) {
			loading(action);
		}
	}

})();