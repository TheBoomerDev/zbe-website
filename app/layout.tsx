import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZBE API — Comprobación de Zonas de Bajas Emisiones | Cargoffer',
  description: 'API para comprobar si tu ruta entra en una Zona de Bajas Emisiones (ZBE) en España y Portugal. Cobertura oficial MITECO, integración vía REST y MCP.',
  keywords: ['ZBE', 'Zonas de Bajas Emisiones', 'Madrid 360', 'Barcelona ZBE', 'Zona de Bajas Emisiones Portugal', 'API transporte', 'Cargoffer'],
  metadataBase: new URL('https://zbe.cargoffer.com'),
  alternates: { canonical: 'https://zbe.cargoffer.com/' },
  openGraph: {
    title: 'ZBE API — Comprobación de Zonas de Bajas Emisiones',
    description: 'API para comprobar si tu ruta entra en una ZBE en España y Portugal.',
    url: 'https://zbe.cargoffer.com/',
    siteName: 'Cargoffer ZBE',
    type: 'website',
  },
  verification: {
    google: 'PENDING_REPLACE_WITH_GOOGLE_CODE',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cargoffer',
  url: 'https://cargoffer.com',
  logo: 'https://cargoffer.com/logo.webp',
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZBE API',
  url: 'https://zbe.cargoffer.com/',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          defer
          src="https://umami.deploy.cargoffer.com/script.js"
          data-website-id="b2f613a6-7f3e-4c8a-9b2d-4e7f8a1c3d5e"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://umami.deploy.cargoffer.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://umami.deploy.cargoffer.com;"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
