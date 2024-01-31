let caminhoFinal;
let caminhoMinimo;

const distanciaTSPNaive = (grafo, s) => {
	let vertice = [];
	for (let i = 0; i < grafo.length; i++) {
		if (i !== s) {
			vertice.push(i);
		}
	}
	
	caminhoMinimo = Number.MAX_VALUE;
	do {
	
		let caminhoPercorrido = 0;
		let k = s;
		
		for (let i = 0; i < vertice.length; i++) {
			caminhoPercorrido += grafo[k][vertice[i]];
			k = vertice[i];
		}
		caminhoPercorrido += grafo[k][s];

    if(caminhoPercorrido < caminhoMinimo){
      caminhoMinimo = caminhoPercorrido;
      caminhoFinal = vertice.slice();
    }
	} while (permutaElementos(vertice));
    caminhoFinal.push(s)
    caminhoFinal.unshift(s);
	return {
        "path": caminhoFinal,
        "distance": caminhoMinimo
    };
}


const swap = (data, esquerda, direita) => {
	let temp = data[esquerda];
	data[esquerda] = data[direita];
	data[direita] = temp;
	
	return data;
}

const reverse = (data, esquerda, direita) => {
	while (esquerda < direita) {
		let temp = data[esquerda];
		data[esquerda++] = data[direita];
		data[direita--] = temp;
	}
	

	return data;
}


const permutaElementos = (data) => {

	if (data.length <= 1) {
		return false;
	}
	let ultimo = data.length - 2;
	

	while (ultimo >= 0) {
		if (data[ultimo] < data[ultimo + 1]) {
			break;
		}
		ultimo--;
	}
	
	if (ultimo < 0) {
		return false;
	}
	let segMaior = data.length - 1;
	
	for (let i = data.length - 1; i > ultimo; i--) {
		if (data[i] > data[ultimo]) {
			segMaior = i;
			break;
		}
	}
	

	data = swap(data, segMaior, ultimo);
	data = reverse(data, ultimo + 1, data.length - 1);
	
	return true;
}

function calculaRota(data){
    let id = 0;

    return (distanciaTSPNaive(montaGrafo(data),id));
}

function montaGrafo(data){
    let grafo = [];
    let dados = data.slice();
    dados.unshift({'id':0, 'x_coord': 0, 'y_coord':0});
    
    dados.forEach(element => {
        let distancias = [];
        dados.forEach(cliente =>{
           distancias.push(Math.hypot(element['x_coord']-cliente['x_coord'], element['y_coord']-cliente['y_coord']));
        })
        grafo.push(distancias);
    });

    return grafo;
}


export { 
    calculaRota 
}