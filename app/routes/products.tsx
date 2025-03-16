import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { Link } from "@tanstack/react-router";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
} from "../components/ui/card";

export type Category = "guitar" | "keyboard" | "drum" | "accessory";

// Example product type - adjust based on your needs
type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  imageUrl: string;
};

const searchParamSchema = z.object({
  category: z.enum(["guitar", "keyboard", "drum", "accessory"]).optional(),
});

// Example products - replace with your actual data source
const products: Product[] = [
  {
    id: "1",
    name: "Electric Guitar",
    category: "guitar",
    price: 799.99,
    imageUrl: "/images/electric-guitar.jpg",
  },
  // ... add more products
];

export const Route = createFileRoute("/products")({
  validateSearch: searchParamSchema,
  component: ProductsComponent,
});

function ProductsComponent() {
  const { category } = Route.useSearch();

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)}s`
          : "All Gear"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to="/products/$productId"
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
                <h2 className="font-semibold text-lg">{product.name}</h2>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="text-lg font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
