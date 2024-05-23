import QRCode from 'qrcode';

function updateQr( el ) {
	QRCode.toCanvas( el, el.dataset.content, {
		errorCorrectionLevel: el.dataset.errorCorrection,
		width: el.dataset.size,
		color: {
			light: el.dataset.colorBackground,
			dark: el.dataset.colorText,
		}
	} );
}

document.addEventListener( 'DOMContentLoaded', function () {
	document.querySelectorAll( '.qrcode' ).forEach( function ( el ) {
		updateQr( el );
	} );
} );
