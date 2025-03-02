import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// Define the search params schema
const searchSchema = z.object({
  category: z.enum(["guitar", "keyboard", "drum", "accessory"]).optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  component: ProductsComponent,
});

function ProductsComponent() {
  const { category } = Route.useSearch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)}s`
          : "All Gear"}
      </h1>
      {/* Add your products grid/list here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>Product items will go here...</div>
      </div>
    </div>
  );
}
