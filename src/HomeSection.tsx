import React, { useState, useEffect } from 'react';

const HomeSection = ({ isAdmin }: { isAdmin?: boolean }) => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [mainText, setMainText] = useState('');
  const [editText, setEditText] = useState('');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/.netlify/functions/home-text')
      .then(res => res.json())
      .then(data => {
        setMainText(data.text);
        setEditText(data.text);
        setLoading(false);
      });
  }, []);

  const handleSend = () => {
    if (chatInput.trim() !== '') {
      setMessages([...messages, chatInput]);
      setChatInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setEditText(mainText);
  };

  const handleSave = async () => {
    setSaving(true);
    await fetch('/.netlify/functions/home-text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: editText }),
    });
    setMainText(editText);
    setEditing(false);
    setSaving(false);
    window.location.reload();
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6rem 0',
        textAlign: 'center',
        zIndex: 1,
        overflow: 'hidden',
        backgroundImage: 'url(/HomeSectionBackground.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.3)',
          zIndex: 0,
        }}
      />
      <div style={{
        position: 'relative',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '90vw',
        zIndex: 1,
        color: '#fff',
      }}>
        <h2>Home</h2>
        {loading ? (
          <p>Loading...</p>
        ) : isAdmin && !editing ? (
          <button onClick={handleEdit} style={{ marginBottom: '1rem', padding: '0.3rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#ffc107', color: '#222', fontWeight: 'bold', cursor: 'pointer' }}>
            Edit Text
          </button>
        ) : null}
        {isAdmin && editing ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <textarea value={editText} onChange={e => setEditText(e.target.value)} rows={3} style={{ width: '100%', maxWidth: 400, borderRadius: '0.5rem', padding: '0.5rem' }} />
            <button onClick={handleSave} disabled={saving} style={{ padding: '0.3rem 1rem', borderRadius: '0.5rem', border: 'none', background: '#28a745', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>{saving ? 'Saving...' : 'Confirm Changes'}</button>
          </div>
        ) : !loading ? (
          <p>{mainText}</p>
        ) : null}
      </div>
      {/* Chatbox Section */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        padding: '1rem',
        minWidth: '300px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <div style={{
          maxHeight: '120px',
          overflowY: 'auto',
          marginBottom: '0.5rem',
          color: '#222',
          fontSize: '0.95rem',
        }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: '0.25rem', textAlign: 'left' }}>{msg}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: '#007bff',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection; 