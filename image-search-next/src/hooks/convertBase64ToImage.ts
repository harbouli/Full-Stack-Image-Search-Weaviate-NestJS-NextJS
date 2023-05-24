import { writeFileSync } from 'fs';

export function convertBase64ToImage(base64Data: string, filename: string) {
  const imageBuffer = Buffer.from(base64Data, 'base64');
  const imagePath = `path/to/save/images/${filename}`; // Specify the path where you want to save the image
  writeFileSync(imagePath, imageBuffer);
  return imagePath;
}
