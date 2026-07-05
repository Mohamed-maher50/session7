import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: "2024-05-23T08:56:21.618Z";
      reviewerName: "John Doe";
      reviewerEmail: "john.doe@x.dummyjson.com";
    },
    {
      rating: number;
      comment: string;
      date: "2024-05-23T08:56:21.618Z";
      reviewerName: "Nolan Gonzalez";
      reviewerEmail: "nolan.gonzalez@x.dummyjson.com";
    },
    {
      rating: number;
      comment: string;
      date: "2024-05-23T08:56:21.618Z";
      reviewerName: "Scarlett Wright";
      reviewerEmail: "scarlett.wright@x.dummyjson.com";
    },
  ];
  returnPolicy: "30 days return policy";
  minimumOrderQuantity: 24;
  meta: {
    createdAt: "2024-05-23T08:56:21.618Z";
    updatedAt: "2024-05-23T08:56:21.618Z";
    barcode: "9164035109868";
    qrCode: "...";
  };
  thumbnail: "...";
  images: ["...", "...", "..."];
};

async function page() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const { products } = await res.json();

  return (
    <div>
      <Link href="/products/new">new product</Link>
      {products.map((product: Product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default page;
