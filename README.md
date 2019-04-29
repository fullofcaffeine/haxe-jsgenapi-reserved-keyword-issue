# Intro

A small sample reproducing a problem [hxgenjs](https://github.com/kevinresol/hxgenjs) has with reserved js keywords. In this sample we're
trying to use `finally` as a variable name in the Haxe code. `finally` is a [reserved JS keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
so it can't be used as an identifier in raw JS (or TS) code.

HaxeJS seems to work around that by prefixing these names with a `$`, but hxgenjs does not do that, and the generated js code ends up being faulty.

# Compiling and running

This sample uses Lix and Haxe 4RC2.

1) Install [Lix](https://github.com/lix-pm/lix.client);
2) Install Haxe 4RC2 using Lix: `lix install haxe 4.0.0-rc.2`;
3) Download necessary haxelibs: `lix download`;
4) Run: `make`;
5) Run: `make run-haxejs` to run the haxejs version of the sample;
6) Run: `make run-hxgenjs` to run the hxgenjs version of the sample (and see the error output).

# Failure and expected result

The hxgenjs version fails with:

```
Main.js:32
	var finally = "Hello World";
	    ^^^^^^^

SyntaxError: Unexpected token finally
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:656:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Module.require (internal/modules/cjs/loader.js:636:17)
    at require (internal/modules/cjs/helpers.js:20:18)
makefile:9: recipe for target 'run-hxgenjs' failed
```

# Expected result

Since it uses the JsGenAPI API, it's expected that these variable names are also prefixed with `$` to prevent these errors, but currently they are not.

# Possible solutions

1) It's expected that the JsGenAPI would provide this feature already, so it might be considered a bug in Haxe/JsGenAPI, in that case the solution would be to fix that in the compiler/JsGenAPI implementation;
2) Additional logic could be added to hxgenjs to cater to this scenario, although we'd be repeating logic that is already implemented in teh compiler, so this is less desirable. Also, need to take into account that the more hxgenjs does, the slower it gets as it's not as fast the OCaml implementation.





