import React from 'react';

const InteractiveGrid = () => {
  return (
    <div className="absolute inset-0 -z-20">
      <div 
        className="interactive-grid" 
        style={{
          '--grid-size': '50px',
          '--dot-size': '1px',
          '--dot-color': 'rgba(255, 255, 255, 0.15)',
          '--glow-color': 'var(--theme-color-primary)',
        }}
      ></div>
    </div>
  );
};

export default InteractiveGrid;