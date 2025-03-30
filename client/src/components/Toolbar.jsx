import { useState } from 'react';
import { FaFont, FaSquare, FaImage, FaTrash, FaSave } from 'react-icons/fa';
import '../styles/Toolbar.css';

export default function Toolbar({ canvas, onSave }) {
  const [activeTool, setActiveTool] = useState(null);

  const addText = () => {
    if (!canvas) return;
    const text = new window.fabric.Textbox('Edit me', {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: '#333333',
      fontFamily: 'Arial'
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
    setActiveTool('text');
  };

  const addRectangle = () => {
    if (!canvas) return;
    const rect = new window.fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#4CAF50',
      stroke: '#333',
      strokeWidth: 1
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
    canvas.renderAll();
    setActiveTool('shape');
  };

  const deleteSelected = () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
    }
  };

  return (
    <div className="toolbar">
      <button 
        onClick={addText}
        className={activeTool === 'text' ? 'active' : ''}
      >
        <FaFont /> Text
      </button>
      
      <button 
        onClick={addRectangle}
        className={activeTool === 'shape' ? 'active' : ''}
      >
        <FaSquare /> Shape
      </button>
      
      <button>
        <FaImage /> Image
      </button>
      
      <button onClick={deleteSelected} className="danger">
        <FaTrash /> Delete
      </button>
      
      <button onClick={onSave} className="save-btn">
        <FaSave /> Save
      </button>
    </div>
  );
}