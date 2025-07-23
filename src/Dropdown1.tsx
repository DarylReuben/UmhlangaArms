import { useState, useRef, useEffect } from 'react';

const itemStyle = {
  padding: '0.75em 1em',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

const Dropdown1 = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const handleMouseLeave = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 3000);
  };
  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width: 200 }}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', padding: '0.5em 1em', borderRadius: 6, border: '1px solid #e5e7eb', background: '#23272f', color: '#fff', cursor: 'pointer' }}>Dropdown1</button>
      <div style={{
        position: 'absolute',
        top: '110%',
        left: 0,
        right: 0,
        background: '#23272f',
        border: '1px solid #e5e7eb',
        borderRadius: 6,
        boxShadow: '0 4px 16px #0006',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transform: open ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'opacity 0.2s, transform 0.2s',
        zIndex: 10
      }}>
        {['Option 1', 'Option 2', 'Option 3'].map((text, i) => (
          <div
            key={text}
            style={{
              ...itemStyle,
              borderBottom: i < 2 ? '1px solid #333' : undefined,
              background: hovered === i ? '#2d2f36' : 'transparent',
            }}
            onMouseOver={() => setHovered(i)}
            onMouseOut={() => setHovered(null)}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown1; 