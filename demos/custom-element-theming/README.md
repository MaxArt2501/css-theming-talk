# Custom element theming

An example of how to use Custom Elements and [dynamic module imports](https://developers.google.com/web/updates/2017/11/dynamic-import) to theme a component via a custom `theme` attribute.

As of March 2018, the former are supported by Chrome, Safari and Firefox, and ["under consideration"](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/customelements/) for Edge; the latter are supported by Chrome (since v63) and in Safari Technical Preview.

## What is this all about?

It's a demo for my [talk about CSS theming](https://github.com/MaxArt2501/css-theming-talk) for the Italian CSS Day in March 2018.

## Why not just `fetch`?

It could have worked indeed, but you had to retrieve a JSON, which means that you couldn't insert a (visual) line break inside a string.

Moreover, once a module is loaded, it will always be there. That's different for assets, as you have to manage your asset cache or another request would be effectively sent (and eventually answered with a status 304).

Finally, I just wanted to try `import()`. Sue me.

But use Chrome (for now).
