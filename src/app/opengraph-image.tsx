import { ImageResponse } from 'next/og';

export const alt = 'Harvi IT Solutions | Enterprise Software & AI Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #090d16 0%, #0f172a 60%, #1e1b4b 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle geometric glowing orb in top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, rgba(225, 29, 72, 0) 70%)',
          }}
        />

        {/* Top Header / Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            H
          </div>
          <span style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px', color: '#f8fafc' }}>
            Harvi IT Solutions
          </span>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '950px' }}>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              color: '#ffffff',
            }}
          >
            Bespoke Enterprise IT Solutions & AI Engineering
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              lineHeight: 1.4,
            }}
          >
            Empowering global businesses with startup agility, custom software architectures, and automated neural intelligence.
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {['AI Automation', 'Custom Software', 'Web Development', 'Mobile Apps'].map((service) => (
            <div
              key={service}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#e2e8f0',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

