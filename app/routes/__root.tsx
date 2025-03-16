import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'
import { Button } from '../components/ui/button'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <nav className="flex items-center py-2 px-4 fixed top-0 left-0 right-0 bg-white z-30">
          <div className="flex gap-2 text-lg items-center flex-1">
            <Link
              to="/"
              activeProps={{
                className: 'font-bold',
              }}
              activeOptions={{ exact: true }}
            >
              Logo
            </Link>
            <Link
              to="/products"
              activeProps={{
                className: 'font-bold',
              }}
            >
              All Gear
            </Link>
            <Link
              to="/products"
              search={{ category: 'guitar' }}
              activeProps={{
                className: 'font-bold',
              }}
            >
              Guitars
            </Link>
            <Link
              to="/products"
              search={{ category: 'keyboard' }}
              activeProps={{
                className: 'font-bold',
              }}
            >
              Keyboards
            </Link>
            <Link
              to="/products"
              search={{ category: 'drum' }}
              activeProps={{
                className: 'font-bold',
              }}
            >
              Drums
            </Link>
            <Link
              to="/products"
              search={{ category: 'accessory' }}
              activeProps={{
                className: 'font-bold',
              }}
            >
              Accessories
            </Link>
          </div>

          <div className="flex gap-2 items-center">
            <div>Search gear...</div>
            <div>Cart</div>
            <Link
              // @ts-expect-error
              to="/sign-in"
              activeProps={{
                className: 'font-bold',
              }}
            >
              <Button>Sign In</Button>
            </Link>
          </div>
        </nav>
        <hr />
        <div className="mt-16">{children}</div>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">About Us</h4>
                <p className="text-gray-400">
                  We are passionate about bringing the best musical instruments to musicians of all
                  levels. Our commitment to quality and service has made us a trusted name in the
                  industry.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Music Street</li>
                  <li>New York, NY 10001</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@musicstore.com</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Newsletter</h4>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for updates and exclusive offers.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Music Store. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
