$(document).ready(function () {
    var wrapper = $('#fieldsWrap');
    var addButton = $('#addButton');
    var amoutInput = $('#amoutInput');
    var calcButton = $('#calcButton');

    $(addButton).click(function (e) {
        e.preventDefault();
        $(wrapper).empty();
        var quantidade = amoutInput.val();

        if (quantidade > 0) {
            $(wrapper).append('<form id="calculadoraForm"></form>');
            for (let index = 1; index <= quantidade; index++) {
                var input =
                    '<div class="form-group">' +
                    '<input type="number" class="form-control" id="campo-' + index +
                    '" aria-describedby="quntidadeHelp" placeholder="Insira o valor ' + index + '" required>' +
                    '<small id="alertaCampo-' + index + '" class="form-text text-muted alerta"></small>' +
                    '</div>'
                $('#calculadoraForm').append(input);
            }
            $('#calculadoraForm').append('<button type="button" class="btn btn-primary" id="calcButton">Somar</button>');
            $(wrapper).append('</form>');
        }
    });

    function validaNumero() {
        var resultado = true;
        var quantidade = amoutInput.val();

        for (let index = 1; index <= quantidade; index++) {
            $('#alertaCampo-' + index).empty();
            var valorCampo = $('#campo-' + index).val();

            if (isNaN(valorCampo) || valorCampo == "") {
                resultado = false;
                $('#alertaCampo-' + index).append('Informe um número válido!');
            }

        }
        return resultado;
    }

    $(document).on('click', '#calcButton', function (e) {
        e.preventDefault();


        var quantidade = amoutInput.val();
        var total = 0;

        var camposValidos = validaNumero();
        if (camposValidos) {

            for (let index = 1; index <= quantidade; index++) {
                total = total + parseInt($('#campo-' + index).val());
            }
            $('#modalResultadoBody').append('<p>A soma dos números informados são: ' + total + '</p>');
            $('#modalResultado').modal('show');
        }
    });


});