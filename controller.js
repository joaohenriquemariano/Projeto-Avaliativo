function verificar(){
	var nome = document.getElementById('nome').value 
    var email = document.getElementById('email').value;
	var celular = document.getElementById('celular').value;
	var cpf = document.getElementById('CPF').value 
	/*var Data de nascimento = document.getElementById('Data de Nascimento').value;
	var senha = document.getElementById('Senha').value;
    var cep = document.getElementById('CEP').value 
	var endereco = document.getElementById('Endereço').value;
	var numero = document.getElementById('Numero').value;
    var complemento = document.getElementById('Complemento').value 
	var bairro = document.getElementById('Bairro').value;
	var cidade = document.getElementById('Cidade').value;
    var estado = document.getElementById('Estado').value;
    var ponto de referência = document.getElementById('Ponto de Referência').value;*/
    if (!nome || !email || !cpf){
		alert("Campos não preenchidos, favor preenchê-los");
	} else {
		alert("Campos preenchidos com sucesso");
	}    
} 