import React, { useState } from 'react';
import { uploadImage } from '../lib/supabase';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  folder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload, folder = 'general' }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      const file = event.target.files?.[0];
      if (!file) return;

      const url = await uploadImage(file, folder);
      onUpload(url);
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="hidden"
        id="image-upload"
      />
      <label 
        htmlFor="image-upload"
        className={`inline-block px-4 py-2 bg-black text-white rounded cursor-pointer ${
          uploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </label>
    </div>
  );
};