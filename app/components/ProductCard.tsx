import { useRouter } from '@tanstack/react-router'
import { Button } from './ui/button'
import { Card } from './ui/card'

export function ProductCard({
  image,
  category,
  name,
  price,
  reviewCount,
  productUrl,
}: {
  image: string
  category: string
  name: string
  price: number
  reviewCount: number
  productUrl: string
}) {
  const router = useRouter()

  return (
    <div>
      <Card
        onClick={() => {
          router.navigate({ to: productUrl })
        }}
        className="w-72 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      >
        <img className="w-full h-48 object-contain" src={image} alt="Electric Guitar" />
        <div className="px-6 py-4 border-t">
          <div className="text-sm text-gray-500 mb-2">{category}</div>
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">({reviewCount} reviews)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${price}</span>
            <Button
              onClick={(e) => {
                e.stopPropagation() // Prevent card click when clicking button
                // Add to cart logic here
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
