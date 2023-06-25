import { Component } from '@angular/core';
import { Album } from './model/album';
import { MusicService } from './service/music.service';
import { Photo } from './model/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matselect';
  constructor(private musicService: MusicService){}

  listAlbum!:Album[]
  albumSelected!: string
  listPhotos!: Photo[]

  ngOnInit(){

    this.loadAlbums();
  }

  private loadAlbums(){
    this.musicService.getAlbum().subscribe(data=>{
      this.listAlbum = data
      console.log("Albums Loaded", this.listAlbum)
    })
  }


  onAlbumselected(selectedAlbumId: any){
    this.musicService.getPhotosOfSelectedAlbum(selectedAlbumId).subscribe(
      data=>{
        this.listPhotos = data
        console.log('photos retrieved', this.listPhotos)
      }
    )
  }
}
