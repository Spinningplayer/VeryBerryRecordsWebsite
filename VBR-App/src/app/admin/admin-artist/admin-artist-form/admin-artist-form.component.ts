import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-admin-artist-form',
  templateUrl: './admin-artist-form.component.html',
  styleUrls: ['./admin-artist-form.component.scss']
})
export class AdminArtistFormComponent implements OnInit {
  artistForm = new FormGroup({
    name: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
    shortDescription: new FormControl("",Validators.required),
    pressPic: new FormControl("",Validators.required),
    spotifyPlaylist: new FormControl("",Validators.required),
    youtubeLink: new FormControl("",Validators.required),
    instagramLink: new FormControl("",Validators.required),
    facebookLink: new FormControl("",Validators.required),
    driveLink: new FormControl("",Validators.required),
    urlName: new FormControl("",Validators.required),
    spotifyId: new FormControl("",Validators.required), 
  })
  artist!: Artist;
  editMode = true;
  error = false;
  file!: File;

  constructor(private artistService: ArtistService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    const artistName = String(this.route.snapshot.paramMap.get('name'));
    if(artistName != "new"){
      this.artistService.getArtists().then(
        artists => {
          console.log(artists?.find(a=>a.urlName == artistName))
          this.artist = artists?.find(a=>a.urlName == artistName) as Artist
          this.artistForm.patchValue(this.artist);
        }
      )
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  save() {    
    if(this.artistForm.valid) {
      let artist = new Artist(this.artistForm.value);
      
      if(this.editMode) {
        artist._id = this.artist._id;
        this.artistService.updateArtist(artist, artist._id)
        .then(response => {
          if(response != null) {
            this._router.navigateByUrl('/backstage/artist');
          } else {
            this.error = true;
          }
        })
        // if(this.artist.pressPic !== artist.pressPic) {
          this.artistService.uploadPicture(this.file)
          .then(response => {
            console.log(response)
          })
        // }
      } else {
        this.artistService.postArtist(artist)
        .then(response => {
          if(response != null) {
            this._router.navigateByUrl('/backstage/artist');
          } else {
            this.error = true;
          }
        })
        this.artistService.uploadPicture(this.file)
        .then(response => {
          console.log(response)
        })
      }

      
    } else {
      
    }
  }

  selectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.file = file;
      this.artistForm.controls.pressPic.setValue(file.name)
    } else {
      this.artistForm.controls.pressPic.setValue('select file')
    }
  }
  cancel() {
    this._router.navigateByUrl('/backstage/artist');
  }

}

// export function toFormData<T>( formValue: Artist ) {
//   const formData = new FormData();

//   for ( const key of Object.keys(formValue) ) {
//     const value = formValue[key];
//     formData.append(key, value);
//   }

//   return formData;
// }
