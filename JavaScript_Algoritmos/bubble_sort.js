function Burbuja() {
	let list_ = [911, 703, 247, 563, 240, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
	let n, i, k, aux;
	n = list_.length;
	// mostramos la lista desordenada
	console.log(list_)
	// Algoritmo
	for(k = 1; k < n; k++){
		for(i = 0; i < (n - k); i++){
			if (list_[i] > list_[i+1]){
				aux = list_[i];
				list_[i] = list_[i+1];
				list_[i+1] = aux;
			}
		}
	}
	// Mostramos por consola la lista ya ordenada
	console.log(list_)
}
Burbuja()
