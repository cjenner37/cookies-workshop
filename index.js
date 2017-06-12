$(document).ready(function () {




		$('#sugar').html(Cookies.get('sugar'));
		$('#chocolate').html(Cookies.get('chocolate'));
		$('#lemon').html(Cookies.get('lemon'));
	

	
	$('#sugar-quantity').click(function () {
		Cookies.set('sugar', $(this).val());
		$('#sugar').html(Cookies.get('sugar'));
	})
	$('#chocolate-quantity').click(function () {
		Cookies.set('chocolate', $(this).val());
		$('#chocolate').html(Cookies.get('chocolate'));
	})
	$('#lemon-quantity').click(function () {
		Cookies.set('lemon', $(this).val());
		$('#lemon').html(Cookies.get('lemon'));
	})



})