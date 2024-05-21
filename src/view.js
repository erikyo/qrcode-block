import QRCode from 'qrcode';

function updateQr( el ) {
	QRCode.toCanvas( el, el.dataset.content, {
		errorCorrectionLevel: el.dataset.errorCorrection,
		width: el.dataset.size,
	} );
}

document.addEventListener( 'DOMContentLoaded', function () {
	document.querySelectorAll( '.qrcode' ).forEach( function ( el ) {
		updateQr( el );
	} );
} );
