# eslint-config-xo-flow

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for [Flow](https://flow.org) to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)

## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-flow babel-eslint eslint-plugin-flowtype
```

## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"xo",
			"xo-flow"
		]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": [
		"xo",
		"xo-flow"
	]
}
```

## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-flow babel-eslint eslint-plugin-flowtype
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-flow"
	}
}
```

## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)
