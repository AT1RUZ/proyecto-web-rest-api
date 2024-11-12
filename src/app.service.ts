import { Injectable } from '@nestjs/common';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as fs from 'fs';
import pdfMake from 'pdfmake/build/pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class AppService {
  // constructor() {
  //   (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  // }
  getHello() {
    // console.log("ENTRANDEO")
    // const dd: TDocumentDefinitions = {
    //   content: [
    //     'First paragraph',
    //     'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    //     {
    //       text: 'This paragraph will have a bigger font',
    //       fontSize: 15,
    //       color: 'blue',
    //     },
    //     {
    //       columns: [
    //         {
    //           text: 'This is a column',
    //         },
    //         {
    //           text: 'Another column',
    //         },
    //       ],
    //     },
    //     { text: 'Tables', style: 'header' },
    //     'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
    //     {
    //       text: 'A simple table (no headers, no width specified, no spans, no styling)',
    //       style: 'subheader',
    //     },
    //     'The following table has nothing more than a body array',
    //     {
    //       style: 'tableExample',
    //       table: {
    //         body: [
    //           ['Column 1', 'Column 2', 'Column 3'],
    //           ['One value goes here', 'Another one here', 'OK?'],
    //         ],
    //       },
    //     },
    //   ],
    // };

    // const pdfDoc = pdfMake.createPdf(dd);

    // pdfDoc.getBuffer((buffer) => {
    //   fs.writeFileSync('pdf/output.pdf', buffer);
    //   console.log('PDF saved successfully');
    // });

     return 'Hello World!';
  }
}