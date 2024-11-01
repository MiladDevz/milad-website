import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const Canvas = styled.canvas`
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  background: white;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: 1rem;
`;

const Button = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
  }
`;

interface MemeCanvasProps {
  width?: number;
  height?: number;
}

export const MemeCanvas: React.FC<MemeCanvasProps> = ({ 
  width = 500, 
  height = 500 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(32);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Draw image if exists
    if (image) {
      const scale = Math.min(width / image.width, height / image.height);
      const x = (width - image.width * scale) / 2;
      const y = (height - image.height * scale) / 2;
      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    }

    // Draw text
    if (text) {
      ctx.fillStyle = 'black';
      ctx.font = `${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      // Add stroke to text
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
      ctx.strokeText(text, width / 2, height - 20);
      ctx.fillText(text, width / 2, height - 20);
    }
  }, [text, fontSize, image, width, height]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => setImage(img);
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'milad-meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <CanvasContainer>
      <Canvas 
        ref={canvasRef} 
        width={width} 
        height={height}
      />
      <ControlsContainer>
        <Input
          type="text"
          placeholder="Enter meme text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Font size"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          min="12"
          max="72"
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <Button onClick={handleDownload}>
          Download Meme
        </Button>
      </ControlsContainer>
    </CanvasContainer>
  );
};