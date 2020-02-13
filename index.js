'use strict';

module.exports = {
	parser: require.resolve('babel-eslint'),
	plugins: [
		'flowtype'
	],
	rules: {
		'flowtype/array-style-complex-type': [
			'error',
			'shorthand'
		],
		'flowtype/array-style-simple-type': [
			'error',
			'shorthand'
		],
		'flowtype/boolean-style': [
			'error',
			'boolean'
		],
		'flowtype/define-flow-type': 'error',
		'flowtype/delimiter-dangle': [
			'error',
			'never'
		],
		'flowtype/generic-spacing': [
			'error',
			'never'
		],
		'flowtype/newline-after-flow-annotation': [
			'error',
			'never'
		],
		'flowtype/no-dupe-keys': 'error',
		'flowtype/no-flow-fix-me-comments': 'warn',
		'flowtype/no-primitive-constructor-types': 'error',
		'flowtype/no-types-missing-file-annotation': 'error',
		'flowtype/no-unused-expressions': 'error',
		'flowtype/no-weak-types': [
			'error',
			{
				any: false,
				Object: true,
				Function: true
			}
		],
		'flowtype/object-type-delimiter': [
			'error',
			'comma'
		],
		'flowtype/require-indexer-name': 'error',
		'flowtype/require-parameter-type': 'error',
		'flowtype/require-return-type': 'error',
		'flowtype/require-types-at-top': [
			'error',
			'always'
		],
		'flowtype/require-valid-file-annotation': [
			'error',
			'always',
			{
				annotationStyle: 'line'
			}
		],
		'flowtype/semi': [
			'error',
			'always'
		],
		'flowtype/space-after-type-colon': [
			'error',
			'always'
		],
		'flowtype/space-before-generic-bracket': [
			'error',
			'never'
		],
		'flowtype/space-before-type-colon': [
			'error',
			'never'
		],
		'flowtype/type-import-style': [
			'error',
			'identifier'
		],
		'flowtype/union-intersection-spacing': [
			'error',
			'always'
		],
		'flowtype/use-flow-type': 'error'
	}
};
