/*
  # Add hero background image
  
  1. Changes
    - Insert hero background image into content table
*/

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