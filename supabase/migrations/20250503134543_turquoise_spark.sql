/*
  # Add hero image content

  1. Changes
    - Add hero background image to content table
    - Add unique constraint on content key, page, and section
*/

-- Add unique constraint for content
ALTER TABLE content 
ADD CONSTRAINT content_key_page_section_unique 
UNIQUE (key, page, section);

-- Insert hero image content
INSERT INTO content (key, value, type, page, section)
VALUES (
  'hero_background',
  'https://images.pexels.com/photos/5852325/pexels-photo-5852325.jpeg',
  'image',
  'home',
  'hero'
) ON CONFLICT (key, page, section) DO UPDATE 
SET value = EXCLUDED.value;