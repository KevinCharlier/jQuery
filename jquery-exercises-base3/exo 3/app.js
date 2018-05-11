let secondes = 60;
let prix
let paris = null;
let prixMax = 100;
let isPlay = true;
let tentative = 0;

$('document').ready(function () {

	$('.prixMax').html(prixMax);

	$('#commencer').click(function () {

		$('#commencer').css('display', 'none')
		$('#nombre').val('');
		$('.chrono').html(secondes + ' secondes');
		prix = Math.floor(Math.random() * prixMax);
		isPlay = true;
		$('.reponse').html('Trouvez le Juste Prix !')
		$('#paris').css({
			'visibility': 'visible',
			'opacity': '1'
		});

		let chrono = setInterval(function () {
			if (secondes == 0) {
				clearInterval(chrono);
				$('.reponse').html('Perdu !')
				$('#paris').css({
					'visibility': 'hidden',
					'opacity': '0'
				});
				isPlay = false;
			} else if (isPlay) {
				secondes--;
				$('.chrono').html(secondes + ' secondes');
			} else {
				clearInterval(chrono);
				$('#paris').css({
					'visibility': 'hidden',
					'opacity': '0'
				});
			}
		}, 1000);
	});

	$('#paris').submit(function (event) {
		if (isPlay) {
			paris = $('#nombre').val();
			tentative++

			if (paris == prix) {
				$('.reponse').html("Gagné ! Ton score est de : " + tentative)
				isPlay = false;
				$('#commencer').css('display', 'none')
			} else if (paris < prix) {
				$('.reponse').html('Plus Grand !')
			} else {
				$('.reponse').html('Plus Petit !')
			}

			$('#nombre').val('');
		}
		event.preventDefault();
	});

});