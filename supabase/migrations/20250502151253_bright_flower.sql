/*
  # Add storage bucket and update image URLs

  1. Storage
    - Create public bucket for images
    - Set up storage policies
  
  2. Changes
    - Add storage_path column to relevant tables
    - Add storage URL functions
*/

-- Create storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true);

-- Allow public access to images bucket
CREATE POLICY "Public Access" ON storage.objects FOR SELECT TO public USING (bucket_id = 'images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'images');

-- Add storage URL function
CREATE OR REPLACE FUNCTION get_storage_image_url(storage_path text)
RETURNS text AS $$
BEGIN
  RETURN CASE 
    WHEN storage_path IS NULL OR storage_path = '' THEN NULL
    WHEN storage_path LIKE 'http%' THEN storage_path
    ELSE '/storage/v1/object/public/images/' || storage_path
  END;
END;
$$ LANGUAGE plpgsql IMMUTABLE;