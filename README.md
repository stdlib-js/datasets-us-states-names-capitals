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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# US State Names and Capitals

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> US state names and capitals.



<section class="usage">

## Usage

```javascript
import table from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-us-states-names-capitals@v0.2.1-deno/mod.js';
```

#### table()

Returns an object mapping US state names to state capitals.

```javascript
var t = table();
/* returns
    {
        'Alabama': 'Montgomery',
        'Alaska': 'Juneau',
        'Arizona': 'Phoenix',
        'Arkansas': 'Little Rock',
        'California': 'Sacramento',
        'Colorado': 'Denver',
        'Connecticut': 'Hartford',
        'Delaware': 'Dover',
        'Florida': 'Tallahassee',
        'Georgia': 'Atlanta',
        'Hawaii': 'Honolulu',
        'Idaho': 'Boise',
        'Illinois': 'Springfield',
        'Indiana': 'Indianapolis',
        'Iowa': 'Des Moines',
        'Kansas': 'Topeka',
        'Kentucky': 'Frankfort',
        'Louisiana': 'Baton Rouge',
        'Maine': 'Augusta',
        'Maryland': 'Annapolis',
        'Massachusetts': 'Boston',
        'Michigan': 'Lansing',
        'Minnesota': 'Saint Paul',
        'Mississippi': 'Jackson',
        'Missouri': 'Jefferson City',
        'Montana': 'Helena',
        'Nebraska': 'Lincoln',
        'Nevada': 'Carson City',
        'New Hampshire': 'Concord',
        'New Jersey': 'Trenton',
        'New Mexico': 'Santa Fe',
        'New York': 'Albany',
        'North Carolina': 'Raleigh',
        'North Dakota': 'Bismarck',
        'Ohio': 'Columbus',
        'Oklahoma': 'Oklahoma City',
        'Oregon': 'Salem',
        'Pennsylvania': 'Harrisburg',
        'Rhode Island': 'Providence',
        'South Carolina': 'Columbia',
        'South Dakota': 'Pierre',
        'Tennessee': 'Nashville',
        'Texas': 'Austin',
        'Utah': 'Salt Lake City',
        'Vermont': 'Montpelier',
        'Virginia': 'Richmond',
        'Washington': 'Olympia',
        'West Virginia': 'Charleston',
        'Wisconsin': 'Madison',
        'Wyoming': 'Cheyenne'
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import capitalize from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-capitalize@deno/mod.js';
import table from 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-us-states-names-capitals@v0.2.1-deno/mod.js';

var tbl = table();

function getCapital( state ) {
    var capital;
    var parts;
    var i;

    // Ensure the first letter of each word comprising a state name is capitalized...
    parts = state.split( ' ' );
    for ( i = 0; i < parts.length; i++ ) {
        parts[ i ] = capitalize( parts[ i ] );
    }
    // Get the state capital:
    capital = tbl[ parts.join( ' ' ) ];

    // Ensure a valid state name was provided...
    if ( capital === void 0 ) {
        throw new Error( 'unrecognized state name. Value: `' + state + '`.' );
    }
    return capital;
}

console.log( getCapital( 'Missouri' ) );
// => 'Jefferson City'

console.log( getCapital( 'New Jersey' ) );
// => 'Trenton'

console.log( getCapital( 'California' ) );
// => 'Sacramento'
```

</section>

<!-- /.examples -->



<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets-us-states-capitals`][@stdlib/datasets/us-states-capitals]</span><span class="delimiter">: </span><span class="description">A list of US state capitals in alphabetical order according to state name.</span>
-   <span class="package-name">[`@stdlib/datasets-us-states-names`][@stdlib/datasets/us-states-names]</span><span class="delimiter">: </span><span class="description">A list of US state names in alphabetical order.</span>
-   <span class="package-name">[`@stdlib/datasets-us-states-names-capitals`][@stdlib/datasets/us-states-names-capitals]</span><span class="delimiter">: </span><span class="description">US state names and capitals.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-us-states-names-capitals.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-us-states-names-capitals

[test-image]: https://github.com/stdlib-js/datasets-us-states-names-capitals/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-us-states-names-capitals/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-us-states-names-capitals?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-us-states-names-capitals.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-us-states-names-capitals/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-us-states-names-capitals#cli
[cli-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/cli
[@stdlib/datasets-us-states-names-capitals]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-us-states-names-capitals/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-us-states-names-capitals/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-us-states-names-capitals/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-us-states-names-capitals/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

<!-- <related-links> -->

[@stdlib/datasets/us-states-capitals]: https://github.com/stdlib-js/datasets-us-states-capitals/tree/deno

[@stdlib/datasets/us-states-names]: https://github.com/stdlib-js/datasets-us-states-names/tree/deno

[@stdlib/datasets/us-states-names-capitals]: https://github.com/stdlib-js/datasets-us-states-names-capitals/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
