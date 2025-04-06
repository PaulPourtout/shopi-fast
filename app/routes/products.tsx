import { createFileRoute, Outlet } from '@tanstack/react-router'
import { z } from 'zod'

import { Link } from '@tanstack/react-router'
import { Card, CardFooter, CardContent, CardHeader } from '../components/ui/card'
import { H1, H3, P } from '../components/ui/typography'

export type Category = 'guitar' | 'keyboard' | 'drum' | 'bass' | 'accessory'

// Example product type - adjust based on your needs
type Product = {
  id: string
  name: string
  category: Category
  price: number
  imageUrl: string
}

const searchParamSchema = z.object({
  category: z.enum(['guitar', 'keyboard', 'drum', 'accessory']).optional(),
})

// Example products - replace with your actual data source
const products: Product[] = [
  {
    id: '1',
    name: 'Electric Guitar',
    category: 'guitar',
    price: 799.99,
    imageUrl: 'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0144502500_gtr_frt_001_rr.jpg',
  },
  {
    id: '2',
    name: 'Acoustic Guitar',
    category: 'guitar',
    price: 599.99,
    imageUrl: 'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0970110232_gtr_frt_001_rr.jpg',
  },
  {
    id: '3',
    name: 'Gibson Les Paul Standard',
    category: 'guitar',
    price: 2699.99,
    imageUrl:
      'https://static.gibson.com/product-images/USA/USAUBC849/Gold%20Top/front-banner-1600_900.png',
  },
  {
    id: '4',
    name: 'Fender Stratocaster',
    category: 'guitar',
    price: 1499.99,
    imageUrl: 'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0110112800_gtr_frt_001_rr.jpg',
  },
  {
    id: '5',
    name: 'PRS Custom 24',
    category: 'guitar',
    price: 3999.99,
    imageUrl:
      'https://www.prsguitars.com/cdn/shop/products/cu24_35th_faded_blue_jean_2020_1_2048x.jpg',
  },
  {
    id: '6',
    name: 'Ibanez RG550',
    category: 'guitar',
    price: 999.99,
    imageUrl: 'https://d1aeri3ty3izns.cloudfront.net/media/49/499869/1200/preview.jpg',
  },
  {
    id: '7',
    name: 'ESP Eclipse',
    category: 'guitar',
    price: 1899.99,
    imageUrl: 'https://d1aeri3ty3izns.cloudfront.net/media/64/642379/1200/preview.jpg',
  },
  {
    id: '8',
    name: 'Jackson Soloist',
    category: 'guitar',
    price: 1299.99,
    imageUrl: 'https://d1aeri3ty3izns.cloudfront.net/media/67/672164/1200/preview.jpg',
  },
  {
    id: '9',
    name: 'Roland RD-2000',
    category: 'keyboard',
    price: 2499.99,
    imageUrl: 'https://www.roland.com/global/products/rd-2000/images/top.jpg',
  },
  {
    id: '10',
    name: 'Nord Stage 3',
    category: 'keyboard',
    price: 4299.99,
    imageUrl:
      'https://www.nordkeyboards.com/sites/default/files/files/products/nord-stage-3/images/Nord-Stage-3-88-top.jpg',
  },
  {
    id: '11',
    name: 'Yamaha CP88',
    category: 'keyboard',
    price: 2499.99,
    imageUrl: 'https://usa.yamaha.com/files/CP88_1800x1200_735a4719b2ab576c8520e64a50fdcb2e.jpg',
  },
  {
    id: '12',
    name: 'Korg Kronos',
    category: 'keyboard',
    price: 3699.99,
    imageUrl: 'https://www.korg.com/us/products/synthesizers/kronos2_88/images/top_L.jpg',
  },
  {
    id: '13',
    name: 'Kurzweil PC4',
    category: 'keyboard',
    price: 2699.99,
    imageUrl: 'https://kurzweil.com/wp-content/uploads/2019/05/pc4-hero.jpg',
  },
  {
    id: '14',
    name: 'Pearl Masters Complete',
    category: 'drum',
    price: 2199.99,
    imageUrl:
      'https://pearldrum.com/common/assets/images/products/drums/masters-complete/MCT924XEP-masters-complete-4pc-shell-pack.jpg',
  },
  {
    id: '15',
    name: 'DW Collectors Series',
    category: 'drum',
    price: 4999.99,
    imageUrl: 'https://www.dwdrums.com/images/drums/kits/collectors/natural-lacquer.jpg',
  },
  {
    id: '16',
    name: 'Tama Starclassic',
    category: 'drum',
    price: 3299.99,
    imageUrl:
      'https://www.tama.com/usa/products/images/drum_kits/starclassic/walnut_birch/WBS42S-MSL.jpg',
  },
  {
    id: '17',
    name: 'Gretsch Renown',
    category: 'drum',
    price: 2499.99,
    imageUrl:
      'https://www.gretschdrums.com/sites/default/files/styles/portfolio_item_image/public/RN2-E825-STB.jpg',
  },
  {
    id: '18',
    name: 'Sonor SQ2',
    category: 'drum',
    price: 5999.99,
    imageUrl: 'https://www.sonor.com/wp-content/uploads/2018/09/SQ2-Beech-Shell-Set.jpg',
  },
  {
    id: '19',
    name: 'Dunlop Jazz III Picks (6 pack)',
    category: 'accessory',
    price: 5.99,
    imageUrl: 'https://www.jimdunlop.com/media/catalog/product/4/7/47p3n_1.jpg',
  },
  {
    id: '20',
    name: "D'Addario EXL110 Strings",
    category: 'accessory',
    price: 12.99,
    imageUrl: 'https://www.daddario.com/media/catalog/product/e/x/exl110_main.png',
  },
  {
    id: '21',
    name: 'Shure SM58 Microphone',
    category: 'accessory',
    price: 99.99,
    imageUrl:
      'https://www.shure.com/cdn-cgi/image/width=1200,quality=90/damapi/m/abc123def456/44436/sm58-hero.jpg',
  },
  {
    id: '22',
    name: 'Boss TU-3 Tuner',
    category: 'accessory',
    price: 99.99,
    imageUrl: 'https://www.boss.info/global/products/tu-3/images/tu-3_top.jpg',
  },
  {
    id: '23',
    name: 'Hercules Guitar Stand',
    category: 'accessory',
    price: 39.99,
    imageUrl:
      'https://herculesstands.com/international/wp-content/uploads/sites/2/2018/04/GS414B-PLUS.jpg',
  },
]

export const Route = createFileRoute('/products')({
  validateSearch: searchParamSchema,
  component: ProductsComponent,
})

function ProductsComponent() {
  const { category } = Route.useSearch()

  const filteredProducts = category ? products.filter((p) => p.category === category) : products

  return (
    <div className="container mx-auto p-6">
      <H1 className="mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}s` : 'All Gear'}
      </H1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to="/product/$productId"
            params={{ productId: product.id }}
            className="hover:opacity-80 transition-opacity"
          >
            <Card>
              <CardHeader className="p-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <H3>{product.name}</H3>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <P className="text-lg font-bold">${product.price.toLocaleString()}</P>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
