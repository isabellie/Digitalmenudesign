interface MenuItemProps {
  name: string;
  price?: string;
  image?: string;
  sizes?: { size: string; price: string }[];
}

export function MenuItem({ name, price, image, sizes }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg mb-2">{name}</h3>
        {sizes ? (
          <div className="space-y-1">
            {sizes.map((size) => (
              <div key={size.size} className="flex justify-between text-sm">
                <span className="text-gray-600">{size.size}</span>
                <span>{size.price}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-800">{price}</p>
        )}
      </div>
    </div>
  );
}
