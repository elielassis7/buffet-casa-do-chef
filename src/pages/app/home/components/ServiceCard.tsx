interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="flex items-center p-4 bg-orange-700 shadow-md rounded-lg m-7">
      <img src={imageUrl} alt={title} className="size-20 mr-4 rounded-full" />
      <div>
        <h2 className="text-3xl font-bold font-dancing text-red-400">{title}</h2>
        <p className="text-yellow-300 font-Josefin">{description}</p>
      </div>
    </div>
  );
};