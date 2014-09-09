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
		image       : 'images/dodecahedron.png',
		reviews     : [ {
			stars  : 5,
			body   : 'I love this product!',
			author : 'joe@thomas.com'
		}, {
			stars  : 1,
			body   : 'This product sucks',
			author : 'tim@hater.com'
		} ]

	}, {
		name        : 'Pentagonal Gem',
		price       : 5.95,
		description : 'the pentagonal gem is ...',
		canPurchase : false,
		soldOut     : false,
		image       : 'images/pentagonal.png',
		reviews     : [ {
			stars  : 4,
			body   : 'I love this product!',
			author : 'joe@thomas.com'
		}, {
			stars  : 2,
			body   : 'This product sucks',
			author : 'tim@hater.com'
		} ]
	} ];

	app.controller( 'ReviewController' , function () {
		this.review = {};

		this.addReview = function ( product ){
			this.review.createdOn = Date.now();
			product.reviews.push( this.review );
			this.review = {};
		};

	} );

	app.controller( 'PanelController' , function () {

		this.tab = 1;

		this.selectTab = function ( setTab ) {
			this.tab = setTab;
		};

		this.isSelected = function ( checkTab ) {
			return checkTab === this.tab;
		};
	} );

} ) ( );