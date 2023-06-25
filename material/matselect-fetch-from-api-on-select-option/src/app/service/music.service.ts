import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpclient: HttpClient) {

  }

  getAlbum(): Observable<Album[]>{

    return this.httpclient.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getPhotosOfSelectedAlbum(selectedAlbumId: string): Observable<any>{
    let parameter1 = new HttpParams().set('albumId', selectedAlbumId);
    return this.httpclient.get("https://jsonplaceholder.typicode.com/photos", {params: parameter1})
  }
}
