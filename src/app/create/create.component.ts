import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Http, Response} from "@angular/http";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private http: Http) { 
    this.http = http;
    this.filesToUpload = [];
  }

  ngOnInit() {
  }

  isPosted = false;
  title = 'app';
  filesToUpload: Array<File>;

  submit(title:HTMLInputElement,desc:HTMLInputElement,image:HTMLInputElement){
    console.log(title.value,desc.value,image.value);

    let body = {
      title: title.value,
      description: desc.value,
      image: image.value

    }
    this.makeFileRequest("http://localhost:3000/create", [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    this.http
        .post("http://127.0.0.1:3000/create", body)
        .map((response: Response) => response.json())
        .subscribe(
          res => {

            
            console.log(res);
            // this.isPosted = true;
            console.log(this.isPosted);


           
          },
          err => {
            // let error = JSON.parse(err.text());
            console.log(err);

            return false;
          }
        );
   ////////////

   

  }
  another1(){
    this.isPosted = false;
    console.log("another one!!!");
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
}

makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}

}
