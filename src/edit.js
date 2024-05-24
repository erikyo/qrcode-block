/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { QR } from './QR';

/**
 * Event Meta block component:
 * Displays the link to the event
 *
 * @param {Object}   props               BlockEditProps < { metaKey: string } >	The block props
 * @param {boolean}  props.attributes    Whether the block is selected
 * @param {Function} props.setAttributes The block context
 * @return {JSX.Element}								              The link block
 */
export default function Edit( { attributes, setAttributes } ) {
	const { textColor, backgroundColor } = attributes;
	const setContent = ( content ) => {
		setAttributes( { content } );
	};

	const setSize = ( size ) => {
		setAttributes( { size } );
	};

	const setErrorCorrection = ( errorCorrection ) => {
		setAttributes( { errorCorrection } );
	};

	const setTextColor = ( color ) => {
		setAttributes( { textColor: { color } } );
	};

	const setBackgroundColor = ( color ) => {
		setAttributes( { backgroundColor: { color } } );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
				<PanelBody title={ __( 'Settings' ) }>
					<TextControl
						label={ __( 'QR-Code text' ) }
						placeholder={ __( 'QR-Code text' ) }
						value={ attributes.content }
						onChange={ setContent }
					/>
					<RangeControl
						label={ __( 'QR-Code size' ) }
						value={ attributes.size }
						onChange={ setSize }
						min={ 100 }
						max={ 500 }
					/>
					<SelectControl
						label={ __( 'QR-Code Error Correction' ) }
						value={ attributes.errorCorrection }
						options={ [
							{ label: 'L', value: 'L' },
							{ label: 'M', value: 'M' },
							{ label: 'Q', value: 'Q' },
							{ label: 'H', value: 'H' },
						] }
						onChange={ setErrorCorrection }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color settings' ) }
					colorSettings={ [
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Light color' ),
						},
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Dark color' ),
						},
					] }
				/>
			</InspectorControls>
			<QR attributes={ { ...attributes } } />
		</div>
	);
}
