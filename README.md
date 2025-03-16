# Metal forge

Metal forge is a training project to try and train on new tech like: Tanstack Start and Form, motion framer, convex, stripe, elastic search...
It's a fake music instruments shop.

## Techs:

- [ ] Use convex (https://www.convex.dev/docs/introduction)
- [ ] Use motion (https://motion.dev/)
- [ ] use zustand for state management (https://zustand.docs.pmnd.rs/)
- [ ] Customize tailwind theme (https://tailwindcss.com/docs/customizing-colors)
- [ ] Use shadcn/ui (https://ui.shadcn.com/)
- [ ] Use lucide icons (https://lucide.dev/)
- [ ] Use react-hook-form (https://react-hook-form.com/)
- [ ] Use Clerk for authentication (https://clerk.com/docs/components/react-router)
- [ ] Use zod for form validation (https://zod.dev/)
- [ ] Use stripe for payment (https://stripe.com/docs)
- [ ] Use Elastic search for products search (https://www.elastic.co/docs)

## TODO:

- [x] Add a landing page
- [-] Add a complete header across pages
- [-] Add a new route for products list
- [ ] Add a new route for product details
- [ ] Add a new route for login
- [ ] Add a new route for register
- [ ] Add a new route for user details
- [ ] Add a new route for basket
- [ ] Add a new route for checkout

## Bonuses:

- [ ] Add a new route for order confirmation
- [ ] Add a new route for order history
- [ ] Add a new route for payment
- [ ] Add a new route for payment confirmation
- [ ] Add a new route for payment history

# Welcome to TanStack.com!

This site is built with TanStack Router!

- [TanStack Router Docs](https://tanstack.com/router)

It's deployed automagically with Netlify!

- [Netlify](https://netlify.com/)

## Development

From your terminal:

```sh
pnpm install
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Editing and previewing the docs of TanStack projects locally

The documentations for all TanStack projects except for `React Charts` are hosted on [https://tanstack.com](https://tanstack.com), powered by this TanStack Router app.
In production, the markdown doc pages are fetched from the GitHub repos of the projects, but in development they are read from the local file system.

Follow these steps if you want to edit the doc pages of a project (in these steps we'll assume it's [`TanStack/form`](https://github.com/tanstack/form)) and preview them locally :

1. Create a new directory called `tanstack`.

```sh
mkdir tanstack
```

2. Enter the directory and clone this repo and the repo of the project there.

```sh
cd tanstack
git clone git@github.com:TanStack/tanstack.com.git
git clone git@github.com:TanStack/form.git
```

> [!NOTE]
> Your `tanstack` directory should look like this:
>
> ```
> tanstack/
>    |
>    +-- form/
>    |
>    +-- tanstack.com/
> ```

> [!WARNING]
> Make sure the name of the directory in your local file system matches the name of the project's repo. For example, `tanstack/form` must be cloned into `form` (this is the default) instead of `some-other-name`, because that way, the doc pages won't be found.

3. Enter the `tanstack/tanstack.com` directory, install the dependencies and run the app in dev mode:

```sh
cd tanstack.com
pnpm i
# The app will run on https://localhost:3000 by default
pnpm dev
```
