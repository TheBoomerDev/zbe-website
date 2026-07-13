import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-brand-dark">ZBE</span>
          <span className="text-sm text-gray-500">by Cargoffer</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#que-es" className="hover:text-brand-dark">Qué es</a>
          <a href="#cobertura" className="hover:text-brand-dark">Cobertura</a>
          <a href="#api" className="hover:text-brand-dark">API</a>
          <a href="#mcp" className="hover:text-brand-dark">MCP</a>
        </nav>
        <a
          href="https://zbe.transcend.cargoffer.com/api"
          className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-4 rounded-md text-sm transition-all"
          data-umami-event="CTA API Docs"
        >
          API Docs
        </a>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-12 md:p-20 shadow-card text-center border border-gray-50">
          <h1 className="headline-main text-4xl md:text-6xl mb-6 leading-tight text-gray-900">
            Comprueba si tu ruta entra en una ZBE
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6 leading-snug">
            Zonas de Bajas Emisiones en España y Portugal, vía API
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Evita multas de hasta 2.000€. Nuestra API consulta los polígonos oficiales de MITECO y
            detecta intersecciones de tu ruta con cualquier ZBE en segundos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://zbe.transcend.cargoffer.com/api"
              className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-md transition-all shadow-md text-sm tracking-wide"
              data-umami-event="CTA Get API Key"
              data-umami-event-source="home-hero"
            >
              Obtener API Key
            </a>
            <a
              href="#api"
              className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 px-8 rounded-md transition-all shadow-md text-sm tracking-wide"
              data-umami-event="CTA Ver ejemplo"
            >
              Ver ejemplo
            </a>
          </div>
        </div>
      </section>

      {/* Qué es ZBE */}
      <section id="que-es" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">¿Qué es una ZBE?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Zona de Bajas Emisiones',
              desc: 'Áreas restringidas donde solo pueden circular vehículos que cumplen normativas de emisiones (distintivo ambiental DGT).',
            },
            {
              title: 'Multas de hasta 2.000€',
              desc: 'Madrid 360, Barcelona ZBE, y otras 150+ zonas en España y Portugal sancionan el acceso no autorizado.',
            },
            {
              title: 'Cobertura oficial',
              desc: 'Polígonos de MITECO (62 ZBE), OpenStreetMap (60+) y portales CKAN de 15+ ciudades, actualizados regularmente.',
            },
          ].map(card => (
            <div key={card.title} className="bg-white rounded-2xl p-8 shadow-card border border-gray-50">
              <h3 className="text-xl font-bold mb-4 text-brand-dark">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cobertura */}
      <section id="cobertura" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Cobertura</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-50">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">España 🇪🇸</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Madrid 360 (Centro, Plaza Elíptica, Villaverde)</li>
              <li>• Barcelona ZBE (Eix Ambiental)</li>
              <li>• ZBE de Valencia, Sevilla, Málaga, Zaragoza</li>
              <li>• 62 polígonos oficiales MITECO</li>
              <li>• Distintivo ambiental DGT (0-EM, ECO, B, C)</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-50">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Portugal 🇵🇹</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Lisboa ZER (Zona de Emissões Reduzidas)</li>
              <li>• Porto ZER</li>
              <li>• 60+ zonas vía OpenStreetMap</li>
              <li>• Categorías Euro (Euro 0-6)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">API REST</h2>
        <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-50">
          <p className="text-gray-600 mb-6">Comprueba una ruta con un POST:</p>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm">
{`POST https://zbe.transcend.cargoffer.com/api/zbe/check-route
Authorization: Bearer TU_API_KEY
Content-Type: application/json

{
  "route": [
    { "lat": 40.4168, "lon": -3.7038 },
    { "lat": 41.3874, "lon": 2.1686 }
  ],
  "vehicle": { "fuel": "diesel", "euroClass": 5 }
}

// Respuesta:
{
  "intersections": [
    { "city": "Madrid", "name": "Madrid 360", "restriction": "C" }
  ],
  "compliant": false
}`}
          </pre>
          <div className="mt-6 flex gap-4">
            <a
              href="https://zbe.transcend.cargoffer.com/api"
              className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-6 rounded-md text-sm"
              data-umami-event="CTA API Reference"
            >
              Documentación completa
            </a>
          </div>
        </div>
      </section>

      {/* MCP */}
      <section id="mcp" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">MCP Server para Agentes AI</h2>
        <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-50 text-center">
          <p className="text-gray-600 mb-6">
            Integra la comprobación de ZBE directamente en tu agente AI (Claude, Cursor, n8n).
          </p>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto text-sm text-left inline-block">
{`npx cargoffer-zbe-mcp`}
          </pre>
          <div className="mt-6">
            <a
              href="https://www.npmjs.com/package/cargoffer-zbe-mcp"
              className="bg-brand hover:bg-brand-dark text-white font-bold py-2 px-6 rounded-md text-sm"
              data-umami-event="CTA npm MCP"
            >
              Ver en npm
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © 2026 Cargoffer. ZBE API es un módulo de TRANSCEND.
          </div>
          <nav className="flex gap-6 text-sm text-gray-600">
            <Link href="https://transcend.cargoffer.com" className="hover:text-brand-dark">TRANSCEND</Link>
            <Link href="https://tolls.cargoffer.com/es" className="hover:text-brand-dark">Tolls</Link>
            <Link href="https://ecmr.cargoffer.com" className="hover:text-brand-dark">eCMR</Link>
            <Link href="https://cargoffer.com" className="hover:text-brand-dark">Cargoffer</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
