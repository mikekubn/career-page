---
author: Michael Kubín
date: 2022-07-24
tags:
  - npm
  - pnpm
  - overwrites
  - link
title: How use npm link in pnpm overwrites
excerpt: >-
  If you work on bigger project with more packages you wil want use pnpm, probably.
---

# How use npm link in pnpm overwrites

_If you work on bigger project with more packages you wil want use `pnpm`, probably._

`"pnpm": { "overrides": { "my-package-foo": "3.4.0", .... } },`

### What is pnpm?

Alternative of node package manager `npm`, but faster and more efficient. [pnpm](https://github.com/pnpm/pnpm 'pnpm')

When I started with pnpm, I tried to link local packages where my main project uses `pnpm` and other local packages use the standard `npm`. But when I used the standard method of linking a project using npm link or pnpm link, I always got the error that the package does not exist. So I decided to write down some steps on how to use the link when using pnpm overrides.

### Steps:

- The repository where is use `npm` can be link with `npm link`.

      In the package, type `npm link` and then go to the main project where the above link package is used and type `npm link package-name-from-package.json` example `npm link @foo/basic` and that's it.

- The repository where is use `pnpm` with overrides.

      If you want to override the package version in the `pnpm` overrides, you need to type this into your package `"overrides": "link:../foo-basic"` *write path into package no path into dist* and then run `pnpm i` and that's it.

### Note:

If you are using VS code, you will need to make a `developer: Reload the window`, sometimes.
