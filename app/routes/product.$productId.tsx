import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '../components/NotFound'
import { Link } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { MinusIcon, PlusIcon, HeartIcon, ArrowLeftIcon } from 'lucide-react'
import { cn } from '../lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  imageUrl: string
  category: string
  description: string
  rating: number
  reviews: number
  stock: number
}

export const Route = createFileRoute('/product/$productId')({
  component: ProductComponent,
  notFoundComponent: () => {
    return <NotFound>Product not found</NotFound>
  },
  loader: async ({ params: { productId } }): Promise<Product> => {
    // Mock data - replace with actual API call
    return {
      id: productId,
      name: 'Gibson Les Paul Custom',
      price: 2899.99,
      originalPrice: 3299.99,
      imageUrl: 'https://via.placeholder.com/600',
      category: 'Electric Guitars',
      description:
        "The Gibson Les Paul Custom is the epitome of rock and metal guitar craftsmanship. Known as the 'Black Beauty,' this iconic instrument delivers crushing tone and sustain that has defined the sound of metal for generations.",
      rating: 4.9,
      reviews: 124,
      stock: 3,
    }
  },
})

function ProductComponent() {
  const product = Route.useLoaderData()
  const savings = product.originalPrice - product.price

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="flex items-center gap-2 text-sm mb-8 hover:text-primary">
        <ArrowLeftIcon size={16} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
            SALE
          </div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
        </div>

        {/* Product Details */}
        <div>
          <div className="text-sm text-gray-600 mb-2">{product.category}</div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={cn('text-yellow-400', i < Math.floor(product.rating) ? '★' : '☆')}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            <span className="text-green-600">Save ${savings.toFixed(2)}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Shipping & Warranty */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Free shipping on orders over $100
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              2-year warranty included
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span>Quantity</span>
              <span className="text-green-600">In stock ({product.stock} available)</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex border rounded-md">
                <Button variant="ghost" size="icon">
                  <MinusIcon size={16} />
                </Button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value="1"
                  className="w-16 text-center border-x"
                />
                <Button variant="ghost" size="icon">
                  <PlusIcon size={16} />
                </Button>
              </div>
              <Button className="flex-1">ADD TO CART</Button>
              <Button variant="outline" size="icon">
                <HeartIcon size={16} />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                DESCRIPTION
              </TabsTrigger>
              <TabsTrigger value="features" className="flex-1">
                FEATURES
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex-1">
                SPECIFICATIONS
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">
                REVIEWS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              {product.description}
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              Features content
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              Specifications content
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              Reviews content
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
