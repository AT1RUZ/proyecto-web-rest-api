// import { Controller, Delete, Get, Param, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
// import { Post } from "@nestjs/common";
// import { ImageService } from "./image.service";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { Response } from "express";

// @Controller('Animal')
// export class ImageController {

//     constructor(private readonly imageService: ImageService){}

//     @Post(':id/image')
//     @UseInterceptors(FileInterceptor('image'))
//     async uploadImage(
//       @Param('id') id: string,
//       @UploadedFile() file: Express.Multer.File,
//     ) {
//       return this.imageService.saveImage(id, file);
//     }   

//     @Get(':id/image')
//     async getImage(@Param('id') id: string, @Res() res: Response) {
//       const imagePath = await this.imageService.getImagePath(id);
//       return res.sendFile(imagePath, { root: '.' });
//     }

//     @Delete(':id/image')
//     async deleteImage(@Param('id') id: string) {
//       return this.imageService.deleteImage(id);
//     }
    
// }