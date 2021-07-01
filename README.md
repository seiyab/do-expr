# package of `do` expressions

This package is inspired by proposal-do-expressions
- https://github.com/tc39/proposal-do-expressions
- https://tc39.github.io/proposal-do-expressions/


## Motivation

* expression-oriented programming one of the great advances of FP
* expressions plug together like legos, making more malleable programming experience in-the-small

## Installation
```
npm install @seiyab/do-expr
```

## Examples

Write in an expression-oriented style, scoping variables as locally as possible:

```js
import { do_ } from "@seiyab/do-expr";

let x = do_(() => {
  let tmp = f();
  return tmp * tmp + 1
});
```


Use conditional statements as expressions, instead of awkward nested ternaries:

```js
let x = do_(() => {
  if (foo()) { return f() }
  else if (bar()) { return g() }
  else { return h() }
});
```

Especially nice for templating languages like JSX:

```js
return (
  <nav>
    <Home />
    {
      do_(() => {
        if (loggedIn) {
          return <LogoutButton />
        } else {
          return <LoginButton />
        }
      })
    }
  </nav>
)
```

## Edge cases

### `var` declarations

(would write documents later)

### Empty `do`

`do_(() => {})` is almost equivalent to `undefined`.

Some lint tool might blame it.

### `await`

Works fine.
To use `await`, you need an `await` before `do_` and an `async` before `()`.

```js
const result = await do_(async () => {
  const x = await fetchSomeData();
  if (x.isSuccess) return "ok";
  return "oops";
});
```

### `yield`

(would write documents later)

### `throw`

Works fine. Does what you expect.

### `break`/`continue`/`return`

These won't work like proposal-do-expressions.

Especially, `return` is used for declaring result of `do_`, rather than `return`ing from outer function.

The major reason is technical one.
And it's also for readability.
Allowing these might induce confusion.
These don't fit the motivation "expression-oriented programming".

### Conflict with `do-while`

No problem at all.

## Comparison
### v.s. IIFE
Yes, `do-expr` is just IIFE as you noticed.
`do-expr` still has some advantages.

The main advantage is readability.
We need to read last part of the expressions to know whether expressions are IIFEs or not.

```js
// plain IIFE
const x = (() => {
//         ^ x is a function?
  if (f()) return g();
  return h();
})()
//^ OK, this is an IIFE.

// do_
const x = do_(() => {
//        ^ OK, this behaves like do expression.
  if (f()) return g();
  return h();
})
```

As another idea, you can declare `_do` argument to indicate it behaves like do expression.

```js
const x = ((_do) => {
//          ^ ok, this behave like do expression.
  if (f()) return g();
  return h();
})()
```

In this case, you need to write coding guideline documents and notify colleagues.
Because this is not idiomatic yet.
If readers don't know this idiom, they are confused by mysterious `_do` argument and might consider it is function declaration until they reach the last `()`.

On the other hand, `do_` already has README.md that you read now.
If readers don't know `do_`, they are likely to google `@seiyab/do-expr` and find this README.

### v.s. proposal-do-expressions
#### Availability
proposal-do-expressions is still stage 1 of the TC39 process.

`do-expr` is already available.
Though it's major version is 0, I would release ver 1.0.0 without changing the implementation.

#### Performance
proposal-do-expressions would be faster than `do-expr`.
Because `do-expr` causes some overheads like function call.

proposal-do-expressions might slow down JS execution engines just a little bit since it induces complexity to the language.

In my opinion, these difference don't matter for most cases.
