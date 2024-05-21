import {useBlockProps} from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * @param attributes {Object} The block attributes
 * @return {JSX.Element} The block element
 */
export default function Save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<canvas
				className="qrcode"
				data-content={ attributes.content }
				data-size={ attributes.size }
				data-error-correction={ attributes.errorCorrection }
			></canvas>
		</div>
	);
}
