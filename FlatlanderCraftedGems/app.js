( function () {

	var app = angular.module ( 'store' , [] );

	app.controller( 'StoreController', function () {

		this.products = gems;

	} );

	var gems = [ {
		name        : 'Dodecahedron',
		price       : 2,
		description : 'the dodecahedron gem is...',
		canPurchase : false,
		soldOut     : false,
		image       : 'images/dodecahedron.png'

	}, {
		name        : 'Pentagonal Gem',
		price       : 5.95,
		description : 'the pentagonal gem is ...',
		canPurchase : false,
		soldOut     : false,
		image       : 'images/pentagonal.png'
	} ];
} ) ();