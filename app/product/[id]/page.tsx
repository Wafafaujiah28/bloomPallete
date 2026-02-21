export default async function DetailPage({ params }: { params: { id: string } }) {
  // SSR: { cache: 'no-store' } memastikan data diambil dari server tiap kali akses
  const res = await fetch(`https://dummyjson.com/products/${params.id}`, { cache: 'no-store' });
  const flower = await res.json();

  return (
    <div className="min-h-screen bg-pink-soft p-10 flex justify-center items-center">
      <div className="bg-white max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-4 border-yellow-gold">
        <img src={flower.thumbnail} className="w-full md:w-1/2 object-cover" />
        <div className="p-10">
          <h1 className="text-4xl font-serif text-pink-deep mb-4">{flower.title}</h1>
          <p className="text-gray-600 mb-6">{flower.description}</p>
          <p className="text-3xl font-bold text-yellow-gold">${flower.price}</p>
          <button className="mt-8 bg-pink-deep text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Tambahkan ke Buket
          </button>
        </div>
      </div>
    </div>
  );
}