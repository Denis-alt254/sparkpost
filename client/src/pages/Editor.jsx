import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useParams } from 'react-router-dom';
import Toolbar from '../components/Toolbar';
import '../styles/Editor.css';

export default function Editor() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const { id } = useParams();

  // Initialize canvas
  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff'
    });
    setCanvas(initCanvas);

    return () => initCanvas.dispose();
  }, []);

  // Add sample text
  const addText = () => {
    canvas.add(new fabric.Textbox('Double click to edit', {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: '#333333'
    }));
    canvas.renderAll();
  };

  return (
    <div className="editor-container">
      <Toolbar onAddText={addText} />
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} id="design-canvas" />
      </div>
    </div>
  );
}