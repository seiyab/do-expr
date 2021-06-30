# package of `do` expressions

This package is inspired by proposal-do-expressions
- https://github.com/tc39/proposal-do-expressions
- https://tc39.github.io/proposal-do-expressions/


## Motivation

* expression-oriented programming one of the great advances of FP
* expressions plug together like legos, making more malleable programming experience in-the-small


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

(write documents later)

### Empty `do`

`do_(() => {})` is almost equivalent to `undefined`.

Some lint tool might blame it.

### `await`/`yield`

(write documents later)

### `throw`

Works fine. Does what you expect.

### `break`/`continue`/`return`

These won't work like proposal-do-expressions.

Though technical reasons are major ones,
I think allowing them in expression might cause confusion.

`return` is used for declaring result of `do_`, rather than `return`ing from outer function.

### Conflict with `do-while`

No problem.
