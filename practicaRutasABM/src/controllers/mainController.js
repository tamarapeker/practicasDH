const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		
		res.render('index', {products, toThousand});
	},
	search: (req, res) => {
		let loQueBuscoElUsuario = req.query.keywords;
		let productsResult = [];
		for( let i=0 ; i < products.length ; i++){
			if(products[i].name.includes(loQueBuscoElUsuario)){
				productsResult.push(products[i]);
			}
		}
		res.render('results', {productsResult, loQueBuscoElUsuario})
	}
};

module.exports = controller;
