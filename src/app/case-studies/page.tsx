'use client';

import PageHeader from '@/components/PageHeader';
import CaseStudyCard from '@/components/CaseStudyCard';

const cases = [
  { client: 'Veloce Motors', title: 'Powering automated parts catalog sync and checkout pipelines.', metric: '+120%', metricLabel: 'Conversion Lift', tags: ['E-Commerce', 'Logistics'] },
  { client: 'Acme Health', title: 'Scaling secure patient booking systems and compliance portals.', metric: 'Zero', metricLabel: 'Compliance Violations', tags: ['Web Dev', 'Security'] },
  { client: 'Starlight Apparel', title: 'Hyperlocal quick delivery solutions launching same day checkout.', metric: '15 Min', metricLabel: 'Fulfillment Time', tags: ['Mobile App', 'Quick Comm'] },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background-dark min-h-screen">
      <PageHeader 
        title="Proven Scale Case Studies" 
        subtitle="Business Impact" 
        description="Explore detailed analysis of custom infrastructure projects launched by our divisions."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <CaseStudyCard
              key={cs.client}
              client={cs.client}
              title={cs.title}
              metric={cs.metric}
              metricLabel={cs.metricLabel}
              tags={cs.tags}
              href="/contact"
              index={idx}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
