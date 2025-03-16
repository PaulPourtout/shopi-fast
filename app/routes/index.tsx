import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { ThumbsUp } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { Card } from '../components/ui/card'
import { CategoryCard } from '../components/CategoryCard'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <header
        className="flex flex-col gap-2 justify-center items-center py-16 min-h-[500px] relative bg-black/60 bg-blend-multiply"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-bold text-white z-10">
          Unleash your <span className="text-primary">sound</span>
        </h1>
        <h3 className="text-xl text-gray-200 z-10">
          Premium instruments and gear for musicians who demand the best.
        </h3>
        <div className="flex gap-2 z-10">
          <Button className="bg-primary hover:bg-primary/90">
            Shop Now <ThumbsUp className="ml-2" />
          </Button>
          <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
            View deals
          </Button>
        </div>
      </header>
      <main className="mb-4">
        <div className="flex flex-col gap-4 items-center">
          <h2>Featured Gear</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <ProductCard
              image="https://sc1.musik-produktiv.com/pic-010160326l/gibson-les-paul-standard-60s-faded-vintage-cherry-sunburst.jpg"
              category="Guitar"
              name="Premium Electric Guitar"
              price={1299.99}
              reviewCount={128}
              productUrl="/products/sample-guitar"
            />
            <ProductCard
              image="https://sc1.musik-produktiv.com/pic-010160326l/gibson-les-paul-standard-60s-faded-vintage-cherry-sunburst.jpg"
              category="Guitar"
              name="Premium Electric Guitar"
              price={1299.99}
              reviewCount={128}
              productUrl="/products/sample-guitar"
            />
            <ProductCard
              image="https://sc1.musik-produktiv.com/pic-010107831xl/fender-american-professional-ii-precision-bass-mn-dark-night.jpg"
              category="Bass"
              name="Premium Electric Bass"
              price={1299.99}
              reviewCount={128}
              productUrl="/products/sample-bass"
            />
            <ProductCard
              image="https://images.sweetwater.com/api/i/q-82__f-webp__ha-a843e0b2c16cc773__hmac-c40ce7e8f2901aef7b021a03ee11e8e32e6c8431/images/items/750/P125B-large.jpg"
              category="Keyboard"
              name="Keyboard"
              price={1299.99}
              reviewCount={128}
              productUrl="/products/sample-keyboard"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h2>Shop by category</h2>
          <p>Find your weapon of choice.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <CategoryCard
              title="Guitar"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              imageUrl="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1470&auto=format&fit=crop"
            />
            <CategoryCard
              title="Bass"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              imageUrl="https://images.unsplash.com/photo-1543060749-aa3f115aad09?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Keyboard"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              imageUrl="https://images.unsplash.com/photo-1570698824041-22cbab696486?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CategoryCard
              title="Drum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              imageUrl="https://images.unsplash.com/photo-1563845104282-efeedd2b75d8?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
