
var oggetto : GameObject;

var cambiamentoposiz : float;

function Start () {

		var posizattuale = oggetto.GetComponent("PosizioneCervo");
		
		posizattuale.posizionex = cambiamentoposiz;
}



