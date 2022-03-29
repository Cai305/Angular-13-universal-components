import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  public myAngularxQrCode: string = null;
  fileUrl;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    this.myAngularxQrCode = 'Your QR code data string';
    const data = 'Your QR code data string';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    
    // saves the text from qr
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  //  createImageFromBlob(image: Blob) {
  //   if (window.navigator.msSaveOrOpenBlob) // IE10+
  //     window.navigator.msSaveOrOpenBlob(image, "myFile.jpg");
  //   else {
  //     var url = window.URL.createObjectURL(image);
  //     window.open(url);
  //   }
  // }

}




 

