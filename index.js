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
			bounceBags();
		} else if ($('#username').val() === 'Casey') {
			sugar = users[1].sugar;
			chocolate = users[1].chocolate;
			lemon = users[1].lemon;
			reloadBags();
			bounceBags();
		} else {
			sugar = users[2].sugar;
			chocolate = users[2].chocolate;
			lemon = users[2].lemon;
			reloadBags();
			bounceBags();
		};
	});

		
	$('#sugar-quantity').change(function () {
		Cookies.set(sugar, $(this).val());
		$('#sugar').html(Cookies.get(sugar));
		pulseBag('#sugar');
	})
	$('#chocolate-quantity').change(function () {
		Cookies.set(chocolate, $(this).val());
		$('#chocolate').html(Cookies.get(chocolate));
		pulseBag('#chocolate');
	})
	$('#lemon-quantity').change(function () {
		Cookies.set(lemon, $(this).val());
		$('#lemon').html(Cookies.get(lemon));
		pulseBag('#lemon');
	});

	$('#clear').click(function () {
		Cookies.set(sugar, 0);
		Cookies.set(chocolate, 0);
		Cookies.set(lemon, 0);
		reloadBags();
		tossBags();
	});

	function bounceBags() {
		animateBags("bounce");
	}

	function tossBags() {
		animateBags("tossing");
	}


	function pulseBag(flavor) {
		let $div = $(flavor + "-bag");
      let index = $div.index();
      $divClone = $div.clone(true);
      let $btn = $(this);
      $btn.attr('disabled', true);
      $div.addClass('pulse').delay(1000).queue(function(){
         $(this).remove();
         if (index === 0) {
            $('.bag-container').prepend($divClone);
            } else if(index === $('.bag-container').children().length) {
               $('.bag-container').append($divClone);
            } else {
               $('.bag-container').children().eq(index).before($divClone);
            }
            $btn.attr('disabled', false);
        });
	}

	function animateBags(animation) {
// clone bags, bounce them, remove them, replace them
		var $bags = $('.bag');
		var $bagsClone = $bags.clone(true);
		let $btn = $(this);
		$btn.attr('disabled', true);
		$bags.addClass(animation).delay(1000).queue(function () {
			$(this).remove();
			$('.bag-container').append($bagsClone);
		})
	};

	function reloadBags() {
		$('#sugar').html(Cookies.get(sugar));
		$('#chocolate').html(Cookies.get(chocolate));
		$('#lemon').html(Cookies.get(lemon));		
	};


});