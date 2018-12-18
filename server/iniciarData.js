/**
 * @author Heiner Gomez V.
 */
var BDTienda = require('./datos/bdtienda.js'),
	Operaciones = require('./datos/usuariosCRUD.js');
	OpArticulos = require('./datos/articulosCRUD.js');
	
Operaciones.eliminarUsuario((error, result) => {
	if(error) console.log(error);
	else{
		console.log(result);
		Operaciones.insertarUsuario((error, result) => {
			if(error) console.log(error);
			console.log(result);
		});
	}
});

OpArticulos.eliminarAllArticulos((error, result) => {
	if(error) console.log(error);
	else {
		console.log(result);
		var articulos = [
			{nombre: "Aguacate", img: "aguacate.jpg", precio: "5000", stock: "46"},
			{nombre: "Ajo", img: "ajo.jpg", precio: "2000", stock: "75"},
			{nombre: "Almendras", img: "almendras.jpg", precio: "6000", stock: "28"},
			{nombre: "Arándanos", img: "arandanos.jpg", precio: "6000", stock: "39"},
			{nombre: "Brócoli", img: "brocoli.png", precio: "3000", stock: "45"},
			{nombre: "Calabaza", img: "calabaza.jpg", precio: "6000", stock: "40"},
			{nombre: "Canela", img: "canela.jpg", precio: "2000", stock: "20"},
			{nombre: "Cebolla", img: "cebolla.jpg", precio: "4000", stock: "30"},
			{nombre: "Fresa", img: "fresa.jpg", precio: "2000", stock: "50"},
			{nombre: "Kiwi", img: "kiwi.jpg", precio: "3000", stock: "36"},
			{nombre: "Limón", img: "limon.jpg", precio: "1500", stock: "70"},
			{nombre: "Lychee", img: "lychee.jpg", precio: "5000", stock: "80"},
			{nombre: "Maiz", img: "maiz.jpg", precio: "2500", stock: "40"},
			{nombre: "Manzana", img: "manzana.jpg", precio: "3400", stock: "39"},
			{nombre: "Naranja", img: "naranja.jpg", precio: "3000", stock: "60"},
			{nombre: "Papa", img: "papa.jpg", precio: "3500", stock: "60"},
			{nombre: "Pasta", img: "pasta.jpg", precio: "2500", stock: "47"},
			{nombre: "Pimienta", img: "pimienta.jpg", precio: "3800", stock: "70"},
			{nombre: "Repollo", img: "repollo.jpg", precio: "4500", stock: "67"},
			{nombre: "Tomate", img: "tomate.jpg", precio: "2800", stock: "78"},
			{nombre: "Zanahoria", img: "zanahoria.jpg", precio: "1800", stock: "58"}
		]
		for (var i = 0; i < articulos.length ; i++) {
			var articulo = articulos[i];
			OpArticulos.insertarArticulo(articulo, (error, result) => {
				if(error) console.log(error);
				console.log(result);
			});
		}
	}
});