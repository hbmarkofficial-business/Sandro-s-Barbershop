import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Mönchengladbach | Sandro’s Barbershop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Sandro’s Barbershop in Mönchengladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Mönchengladbach, Sandro's"
        />
        <link rel="canonical" href="https://sandros-barbershop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Sandro’s Barbershop | Premium Barbershop Mönchengladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Mönchengladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sandros-barbershop.de" />
        <meta property="og:image" content="https://sandros-barbershop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sandro’s Barbershop | Premium Barbershop Mönchengladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://sandros-barbershop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Sandro’s Barbershop",
            "image": "https://sandros-barbershop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hauptstraße 123",
              "addressLocality": "Mönchengladbach",
              "postalCode": "41061",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1912",
              "longitude": "6.4428"
            },
            "url": "https://sandros-barbershop.de",
            "telephone": "+49 2161 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/sandrosbarbershop",
              "https://www.instagram.com/sandrosbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

