import { useState } from 'react';

const getContrastColor = (hex) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 128 ? '#000000' : '#ffffff';
};

function App() {
  const [dominant, setDominant] = useState('#E5EAE6'); 
  const [secondary, setSecondary] = useState('#416858'); 
  const [accent, setAccent] = useState('#F1FF58'); 

  const generateRandomPalette = () => {
    const popularColors = [
      '#0F172A', '#1E293B', '#334155', '#F8FAFC', '#E2E8F0',
      '#3B82F6', '#60A5FA', '#1D4ED8', '#10B981', '#34D399',
      '#047857', '#F59E0B', '#FBBF24', '#B45309', '#EF4444',
      '#F87171', '#B91C1C', '#8B5CF6', '#A78BFA', '#6D28D9',
      '#EC4899', '#F472B6', '#BE185D', '#06B6D4', '#2DD4BF'
    ];

    const shuffledColors = [...popularColors].sort(() => 0.5 - Math.random());
    
    setDominant(shuffledColors[0]);
    setSecondary(shuffledColors[1]);
    setAccent(shuffledColors[2]);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e8ede4 0%, #d8d4c4 100%)',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        maxWidth: '1000px',
        width: '100%',
        padding: '2rem',
        alignItems: 'center'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          
          <div style={{
            backgroundColor: '#39574D',
            color: '#F1FF58',
            padding: '0.6rem 1.2rem',
            borderRadius: '30px',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            Ratio631 Tool
          </div>
          
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '700',
            lineHeight: '1.05',
            color: '#081F1A',
            letterSpacing: '-0.04em'
          }}>
            The 60:30:10<br />
            Color Rule<br />
            Visualized
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: '#2A4038',
            opacity: 0.9,
            marginTop: '0.5rem',
            maxWidth: '85%'
          }}>
            Generate UI proportions dynamically based on the #Ratio631 standard.
          </p>

          <button 
            onClick={generateRandomPalette}
            style={{
              marginTop: '1rem',
              padding: '1rem 2rem',
              backgroundColor: '#081F1A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            ✨ Astonish Me
          </button>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)', 
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          
          <div style={{ backgroundColor: dominant, padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.5s ease' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '500', opacity: 0.6, color: getContrastColor(dominant) }}>Dominant</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.2rem' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '600', color: getContrastColor(dominant) }}>{dominant}</div>
                <input type="color" value={dominant} onChange={(e) => setDominant(e.target.value.toUpperCase())} style={{ cursor: 'pointer', height: '25px', width: '25px', border: 'none', background: 'transparent', padding: 0 }} />
              </div>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: getContrastColor(dominant) }}>60%</div>
          </div>

          <div style={{ backgroundColor: secondary, padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.5s ease' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '500', opacity: 0.8, color: getContrastColor(secondary) }}>Secondary</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.2rem' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '600', color: getContrastColor(secondary) }}>{secondary}</div>
                <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value.toUpperCase())} style={{ cursor: 'pointer', height: '25px', width: '25px', border: 'none', background: 'transparent', padding: 0 }} />
              </div>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: getContrastColor(secondary) }}>30%</div>
          </div>

          <div style={{ backgroundColor: accent, padding: '2.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.5s ease' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '500', opacity: 0.7, color: getContrastColor(accent) }}>Accent</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.2rem' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '600', color: getContrastColor(accent) }}>{accent}</div>
                <input type="color" value={accent} onChange={(e) => setAccent(e.target.value.toUpperCase())} style={{ cursor: 'pointer', height: '25px', width: '25px', border: 'none', background: 'transparent', padding: 0 }} />
              </div>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: getContrastColor(accent) }}>10%</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;