$(document).ready(function () {

// cookie key variables for each user
	var users = [
		{
			'name': 'Cameron',
			'sugar': 'cam-sugar',
			'chocolate': 'cam-chocolate',
			'lemon': 'cam-lemon'
		},
		{
			'name': 'Casey',
			'sugar': 'casey-sugar',
			'chocolate': 'casey-chocolate',
			'lemon': 'casey-lemon'
		},
		{
			'name': '',
			'sugar': 'sugar',
			'chocolate': 'chocolate',
			'lemon': 'lemon'
		}
	];

// Initialize cookie key variables
	var sugar = 'sugar';
	var chocolate = 'chocolate';
	var lemon = 'lemon';

// Sign in and assign cookie key variables
	$('#sign-in').click(function () {
		if ($('#username').val() === 'Cameron') {
			sugar = users[0].sugar;
			chocolate = users[0].chocolate;
			lemon = users[0].lemon;
			reloadBags();
		} else if ($('#username').val() === 'Casey') {
			sugar = users[1].sugar;
			chocolate = users[1].chocolate;
			lemon = users[1].lemon;
			reloadBags();
		} else {
			sugar = users[2].sugar;
			chocolate = users[2].chocolate;
			lemon = users[2].lemon;
			reloadBags();
		}
	})

	function reloadBags() {
		$('#sugar').html(Cookies.get(sugar));
		$('#chocolate').html(Cookies.get(chocolate));
		$('#lemon').html(Cookies.get(lemon));		
	}
		
	$('#sugar-quantity').click(function () {
		Cookies.set(sugar, $(this).val());
		$('#sugar').html(Cookies.get(sugar));
	})
	$('#chocolate-quantity').click(function () {
		Cookies.set(chocolate, $(this).val());
		$('#chocolate').html(Cookies.get(chocolate));
	})
	$('#lemon-quantity').click(function () {
		Cookies.set(lemon, $(this).val());
		$('#lemon').html(Cookies.get(lemon));
	})
})