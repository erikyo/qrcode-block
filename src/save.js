import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * @param attributes {Object} The block attributes
 * @return {JSX.Element} The block element
 */
export default function Save({ attributes }) {
	const { textColor, backgroundColor } = attributes;
	console.log('Text Color:', textColor);
	return (
		<div {...useBlockProps.save()}>
			
			<canvas
				className="qrcode"
				data-content={attributes.content}
				data-size={attributes.size}
				data-error-correction={attributes.errorCorrection}
				data-color-text={textColor.color}
				data-color-background={backgroundColor.color}
			></canvas>
		</div>
	);
}
