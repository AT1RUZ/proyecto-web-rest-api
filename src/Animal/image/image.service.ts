// import { Injectable } from '@nestjs/common';
// import * as fs from 'fs';
// import * as path from 'path';

// @Injectable()
// export class ImageService {
//   private readonly uploadPath = 'uploads/animals';
//   private readonly defaultImage = 'default.jpg';

//   constructor() {
//     // Crear directorio si no existe
//     if (!fs.existsSync(this.uploadPath)) {
//       fs.mkdirSync(this.uploadPath, { recursive: true });
//     }
//   }

//   async saveImage(id: string, file: Express.Multer.File): Promise<string> {
//     const extension = path.extname(file.originalname);
//     const fileName = `${id}${extension}`;
//     const filePath = path.join(this.uploadPath, fileName);
    
//     await fs.promises.writeFile(filePath, file.buffer);
//     return fileName;
//   }

//   async getImagePath(id: string): Promise<string> {
//     const files = await fs.promises.readdir(this.uploadPath);
//     const animalImage = files.find(file => file.startsWith(id));
    
//     if (animalImage) {
//       return path.join(this.uploadPath, animalImage);
//     }
//     return path.join(this.uploadPath, this.defaultImage);
//   }

//   async deleteImage(id: string): Promise<void> {
//     const files = await fs.promises.readdir(this.uploadPath);
//     const animalImage = files.find(file => file.startsWith(id));
    
//     if (animalImage) {
//       await fs.promises.unlink(path.join(this.uploadPath, animalImage));
//     }
//   }
// } 