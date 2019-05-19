[![badge][apm]][package]
[![apm](https://img.shields.io/apm/dm/atom-mocha-snippets.svg?style=flat-square)](https://atom.io/packages/atom-mocha-snippets)

# Mocha Snippets

JavaScript/TypeScript snippets for Mocha in Atom.

![](https://raw.githubusercontent.com/Linesmerrill/atom-mocha-snippets/master/images/usage.gif)

## Install
`apm install atom-mocha-snippets` or search “snippets” under packages within Atom.

**Note:** Atom requires a restart after settings are changed for them to take effect.

## Settings
Toggle Double Quotes: [Default: single quotes] Allows the user to toggle between single and double quotes.

Toggle Semicolons: [Default: with semicolons] Allows the user to toggle between having semicolons on or off.

**Note:** Atom requires a restart after settings are changed for them to take effect.

## Snippets

### Describe

```
describe('', function(){

});
```

### Context

```
context('', function(){

});
```

### It

```
it('', function(){

});
```
### Specify

```
specify('', function(){

});
```

### Before

```
before(function(){

});
```

### beforeEach

```
beforeEach(function(){

});
```

### after

```
after(function(){

});
```

### afterEach

```
afterEach(function(){

});
```

### pending

```
it('');
```

### retries

```
this.retries(integer);
```

### timeout

```
this.timeout(milliseconds);
```

## Contributors:

* @coichedid - Added ES6 support

* @thoiberg - Added configurable settings for semicolons

* @th-we - Added Typescript support

License
-------
[MIT] © [Merrill Lines]

[apm]:              https://img.shields.io/apm/v/atom-mocha-snippets.svg?style=flat-square
[package]:          https://atom.io/packages/atom-mocha-snippets
