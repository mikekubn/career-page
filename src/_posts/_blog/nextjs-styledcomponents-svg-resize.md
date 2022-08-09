---
author: Michael Kubín
date: 23.6.2022
tags:
  - next.js
  - styled-components
  - svg
title: Next.js import and resize SVG in styled components
excerpt: >-
  If you want to use **SVG** in your Next.js project with **styled components** you can find problem with import and resize image. I was personally surprised by this problem.
---

# Next.js import and resize SVG in styled components

_If you want to use **SVG** in your Next.js project with **styled components** you can find problem with import and resize image. I was personally surprised by this problem._

Example: [Next.js with styled components resize SVG](https://github.com/mikekubn/next-removeViewBox-example)

I started the same way I was used to using in CRA, but immediately ran into an issue regarding SVG support in Next.js but it had a quick solution [Dangerously Allow SVG ](https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg). My `typing.d.ts` file looked like this:

    declare module '*.svg' {
      import React from 'react';

      const src: string;

      export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
      export default src;
    }

I started looking for some solution to import and resize SVG in my project. I found several solutions that work, but none worked for my purposes.

**Work solutions but none worked for my purposes:**
[# Image Component Example](https://github.com/vercel/next.js/tree/canary/examples/image-component)
[# SVG components example with SWC](https://github.com/vercel/next.js/tree/canary/examples/svg-components)

After a few hours of research I discovered that the default option for `removeViewBox` is set to `true` . If you change the height or width in the SVG, the viewport from the SVG will be returned to the default value. **The solution** is to edit the webpack configuration in `next.config.js` and set `removeViewBox` to `false` SVG resizing will work.

    webpack(config) {
        config.module.rules.push({
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
          test: /\.svg$/,
        });

        return config;
      }
    ...

## Note

If you are using `.babelrc` and have set `inline-react-svg`, this solution will not work for you.
