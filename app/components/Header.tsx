import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { ShoppingCart, Skull } from 'lucide-react'
import { H1 } from './ui/typography'

export function Header() {
  return (
    <nav className="flex items-center py-2 px-4 fixed top-0 left-0 right-0 bg-white z-30 lg:px-16">
      <div className="flex gap-2 text-lg items-center flex-1">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          <h1 className="flex gap-2 items-center text-2xl">
            <Skull className="size-8 rounded-full" />
            Metal Forge
          </h1>
        </Link>
        <div className="flex gap-2 items-center justify-center flex-1">
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
      </div>

      <div className="flex gap-2 items-center">
        <div>Search gear...</div>
        <Link to="/cart">
          <Button variant="ghost">
            <ShoppingCart className="size-6" />
          </Button>
        </Link>
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
  )
}
