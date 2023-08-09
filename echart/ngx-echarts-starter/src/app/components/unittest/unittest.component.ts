import { Component } from '@angular/core';


export class TranslateFileService {
 getVideoFiles (search: string): Promise<any[]> {
      const fileList = [];

      return new Promise<any[]>((resolve, reject) => {
          if (search === 'error') return reject('an error occured');
          return resolve(fileList.filter(f => f.label.includes(search)));
      });
      }
}


export class AlertService {
 error(mesg: string) {
  console.log(`Error: ${mesg}`);
 }
}


@Component({
  selector: 'app-unittest',
  templateUrl: './unittest.component.html',
  styleUrls: ['./unittest.component.scss']
})
export class UnittestComponent {
files: any;

  constructor(
    public alert: AlertService,
    private translateFileService: TranslateFileService) {}

  public onInputChange (search: string) {
    const that = this;
    this.translateFileService.getVideoFiles(search)
        .then(files => (files.length) ? this.files = files : '')
        .catch(this.alert.error.bind(that));
  }
}
