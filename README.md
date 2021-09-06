<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isMethod

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if an object has a specified method name.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-method
```

</section>

<section class="usage">

## Usage

```javascript
var isMethod = require( '@stdlib/assert-is-method' );
```

#### isMethod( value, property )

Returns a `boolean` indicating if a `value` has a specified [**own**][@stdlib/assert/has-own-property] method name.

```javascript
function noop() {
    // Example function...
}

var value = {
    'beep': noop
};

var bool = isMethod( value, 'beep' );
// returns true

bool = isMethod( value, 'toString' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isMethod( 'beep', 'toString' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    function noop() {
        // Example function...
    }

    var value = {
        'null': noop
    };
    var bool = isMethod( value, null );
    // returns true

    value = {
        '[object Object]': noop
    };
    bool = isMethod( value, {} );
    // returns true
    ```

-   The function searches only [**own**][@stdlib/assert/has-own-property] properties.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isMethod = require( '@stdlib/assert-is-method' );

var bool = isMethod( { 'a': isMethod }, 'a' );
// returns true

bool = isMethod( { 'a': 'b' }, 'a' );
// returns false

bool = isMethod( { 'a': 'b' }, null );
// returns false

bool = isMethod( {}, 'toString' );
// returns false

bool = isMethod( null, 'a' );
// returns false

bool = isMethod( void 0, 'a' );
// returns false

bool = isMethod( { 'null': isMethod }, null );
// returns true

bool = isMethod( { '[object Object]': isMethod }, {} );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/assert/has-own-property`][@stdlib/assert/has-own-property]: test if an object has a specified property.
-   [`@stdlib/assert/is-function`][@stdlib/assert/is-function]: test if a value is a function.
-   [`@stdlib/assert/is-method-in`][@stdlib/assert/is-method-in]: test if an object has a specified method name, either own or inherited.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-method.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-method

[test-image]: https://github.com/stdlib-js/assert-is-method/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-method/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-method/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-method?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-method.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-method/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-method/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert-has-own-property

[@stdlib/assert/is-function]: https://github.com/stdlib-js/assert-is-function

[@stdlib/assert/is-method-in]: https://github.com/stdlib-js/assert-is-method-in

<!-- </related-links> -->

</section>

<!-- /.links -->
