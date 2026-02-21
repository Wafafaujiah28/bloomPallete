import Link from 'next/link';

export default async function Home() {
  // Teknik SSG: Mengambil data dekorasi bunga dari API
  const res = await fetch('https://dummyjson.com/products/category/home-decoration');
  const data = await res.json();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center border-b-4 border-yellow-gold">
        <h1 className="text-6xl font-serif text-pink-deep mb-4">🌸 Bloom Palette</h1>
        <p className="text-gray-500 italic text-xl max-w-2xl mx-auto">
          "Membawa keindahan alam langsung ke depan pintu Anda dengan sentuhan kasih sayang."
        </p>
      </section>

      {/* Katalog Produk */}
      <div className="max-w-6xl mx-auto p-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 border-l-8 border-pink-deep pl-4">Katalog Bunga</h2>
          <span className="text-pink-deep font-medium">SSG Rendering Mode</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.products.map((item: any) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-transparent hover:border-pink-deep transition-all duration-300 group"
            >
              {/* Gambar dengan Link ke Detail (SSR) */}
              <Link href={`/product/${item.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-pink-deep font-bold shadow-sm">
                    Terlaris
                  </div>
                </div>
              </Link>

              {/* Detail Singkat */}
              <div className="p-6 bg-yellow-soft/20">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-black text-pink-deep">${item.price}</p>
                  <Link 
                    href={`/product/${item.id}`} 
                    className="bg-pink-deep text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-gold transition-colors shadow-md"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Sederhana */}
      <footer className="bg-white py-10 text-center text-gray-400 border-t border-pink-100">
        <p>© 2026 Bloom Palette Florist. Dibuat dengan Next.js</p>
      </footer>
    </main>
  );
}