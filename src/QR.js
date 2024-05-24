import { createRef, useEffect } from '@wordpress/element';
import QRCode from 'qrcode';

export function QR( { attributes } ) {
	const {
		content = 'QR-Code text',
		size = 100,
		errorCorrection = 'L',
		textColor,
		backgroundColor,
	} = attributes;

	const qrcodeRef = createRef();

	useEffect( () => {
		QRCode.toCanvas( qrcodeRef.current, content, {
			errorCorrectionLevel: errorCorrection,
			width: size,
			color: {
				light: backgroundColor.color,
				dark: textColor.color,
			},
		} );
	}, [
		content,
		size,
		errorCorrection,
		backgroundColor.color,
		textColor.color,
	] );

	return (
		<canvas
			ref={ qrcodeRef }
			className={ 'qrcode' }
			data-content={ content }
			data-size={ size }
			data-error-correction={ errorCorrection }
			data-color-text={ textColor.color }
			data-color-background={ backgroundColor.color }
		/>
	);
}
