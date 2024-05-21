/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {PanelBody, RangeControl, SelectControl, TextControl,} from '@wordpress/components';

import {__} from '@wordpress/i18n';
import QRCode from 'qrcode';
import {createRef, useEffect} from '@wordpress/element';

function QRCodeComponent({attributes}) {
	const {
		content = 'QR-Code text',
		size = 100,
		errorCorrection = 'L',
	} = attributes;

	const qrcodeRef = createRef();

	useEffect(() => {
		QRCode.toCanvas(qrcodeRef.current, content, {
			errorCorrectionLevel: errorCorrection,
			width: size,
		});
	}, [content, size, errorCorrection]);

	return (
		<canvas
			ref={qrcodeRef}
			className={'qrcode'}
			data-content={content}
			data-size={size}
			data-error-correction={errorCorrection}
		/>
	);
}

/**
 * Event Meta block component:
 * Displays the link to the event
 *
 * @param  props                                      BlockEditProps < { metaKey: string } >	The block props
 * @param  {boolean} props.attributes 						    Whether the block is selected
 * @param {string} props.attributes.content					The content of the link
 * @param {number} props.attributes.size						The size of the link
 * @param {string} props.attributes.errorCorrection			The error correction of the link
 * @param  {Function} props.setAttributes 							The block context
 * @return {JSX.Element}								              The link block
 */
export default function Edit({attributes, setAttributes}) {
	const setContent = (content) => {
		setAttributes({content});
	};

	const setSize = (size) => {
		setAttributes({size});
	};

	const setErrorCorrection = (errorCorrection) => {
		setAttributes({errorCorrection});
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<PanelBody title={__('Settings')}>
					<TextControl
						label={__('QR-Code text')}
						placeholder={__('QR-Code text')}
						initialValue={'QR-Code text'}
						value={attributes.content}
						onChange={setContent}
					/>
					<RangeControl
						label={__('QR-Code size')}
						value={attributes.size}
						onChange={setSize}
						min={100}
						max={500}
					/>
					<SelectControl
						label={__('QR-Code Error Correction')}
						value={attributes.errorCorrection}
						options={[
							{label: 'L', value: 'L'},
							{label: 'M', value: 'M'},
							{label: 'Q', value: 'Q'},
							{label: 'H', value: 'H'},
						]}
						onChange={setErrorCorrection}
					/>
				</PanelBody>
			</InspectorControls>
			<QRCodeComponent attributes={attributes}/>
		</div>
	);
}
