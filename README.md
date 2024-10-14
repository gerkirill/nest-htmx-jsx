# Nest JS with HTMX, Bootsrap CSS and JSX Template Engine

The experiment inspired by [HTMX](https://htmx.org/docs). Tried it with NestJS because it provides a structure right out of the box. Bootstrap CSS is here because there aren't much pure CSS solutions, not requiring React right now.
It took me one day to understand that the Pug templating engine is so primitive compared to JSX.
So I found [this article](https://evertpot.com/jsx-template/) and [this library](https://github.com/sjones6/nestjs-jsx-template-engine/tree/master) to make it work.

I've also implemented my own validation, because the built-in one throws exceptions giving to chance to render the response template.