import { useState, useEffect } from 'react';

function EffectDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Effect A: Runs on EVERY render (no dependency array)
  useEffect(() => {
    console.log('Effekt A: Läuft bei jedem Render');
  });

  // Effect B: Runs ONLY on mount (empty dependency array)
  useEffect(() => {
    console.log('Effekt B: Läuft nur beim Mount');
  }, []);

  // Effect C: Runs when count changes
  useEffect(() => {
    console.log('Effekt C: count hat sich geändert:', count);
  }, [count]);

  // Effect D: Runs when text changes
  useEffect(() => {
    console.log('Effekt D: text hat sich geändert:', text);
  }, [text]);

  // Effect E: Runs when count OR text changes
  useEffect(() => {
    console.log('Effekt E: count ODER text hat sich geändert');
  }, [count, text]);

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '24px' }}>
      <h2>Dependency Array Demo</h2>

      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Count +1
      </button>

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tippe etwas..."
          style={{ 
            padding: '8px', 
            width: '100%', 
            boxSizing: 'border-box',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <p style={{ fontSize: '12px', color: '#999', marginTop: '16px' }}>
        Öffne die Konsole (F12) und beobachte welche Effekte laufen!
      </p>
    </div>
  );
}

export default EffectDemo;