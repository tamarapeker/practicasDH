const fs = require('fs');
const path = require('path');
const multer = require('multer');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		for (let i = 0; i < products.length ; i++){
			if(id == products[i].id){
				product = products[i];
				res.render('detail', {product});		
			}
		}
		res.send('No existe un producto con ese Id')
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form', {products});
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		let newProduct = req.body
		newProduct = {
			id: products.length + 1,
			name: req.body.name ,
			price: Number(req.body.price) ,
			discount: Number(req.body.discount) ,
			category: req.body.category ,
			description: req.body.description ,
			image: req.files[0].filename
		}
		
		products.push(newProduct);
		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productFind;
		products.forEach(function(product){
			if(product.id == id){
				productFind = product;
				res.render('product-edit-form', {product: productFind});
			}
		});
		res.send('No existe el producto');
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		products.forEach(function(product){
			if(product.id == id){
				product.name = req.body.name;
				product.price = Number(req.body.price);
				product.discount = Number(req.body.discount);
				product.category = req.body.category;
				product.description = req.body.description;
			}
		});

		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let newProducts = products.filter(function(product){
			return product.id != id;
		});

		let productsJSON = JSON.stringify(newProducts);
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/products');
	}
};

module.exports = controller;