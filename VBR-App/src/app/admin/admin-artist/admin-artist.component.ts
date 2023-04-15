import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-admin-artist',
  templateUrl: './admin-artist.component.html',
  styleUrls: ['./admin-artist.component.css']
})
export class AdminArtistComponent implements OnInit {

  editMode = false;
  artist!: Artist;
  artistForm!: FormGroup;

  constructor(private service: ArtistService) { }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    if(this.editMode) {
      this.service.updateArtist(this.artistForm.value, this.artist._id)
      .then(response => {
        this.editMode = false;
      }).catch(error => console.log(error))
    } else {
      this.service.postArtist(this.artistForm.value)
      .then(response => {
        
      }).catch(error => console.log(error))
    }
  }

  cancel() {
    this.artistForm.patchValue({
      'name': null,
      'description': null,
      'shortDescription': null,
      'pressPic': null,
      'spotifyId': null,
      'spotifyPlaylist': null,
      'youtubeLink': null,
      'instagramLink': null,
      'facebookLink': null,
      'driveLink': null,
      'urlName': null
    })
  }

  initForm(): void {
    let name;
    let description;
    let shortDescription;
    let pressPic;
    let spotifyId;
    let spotifyPlaylist;
    let youtubeLink;
    let instagramLink;
    let facebookLink;
    let driveLink;
    let urlName;

    if(this.editMode) {
      name = this.artist.name;
      description = this.artist.description;
      shortDescription = this.artist.shortDescription;
      pressPic = this.artist,pressPic;
      spotifyId = this.artist.spotifyId;
      spotifyPlaylist = this.artist.spotifyPlaylist;
      youtubeLink = this.artist.youtubeLink;
      instagramLink = this.artist.instagramLink;
      facebookLink = this.artist.facebookLink;
      driveLink = this.artist.driveLink;
      urlName = this.artist.urlName;
    }

    this.artistForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'shortDescription': new FormControl(shortDescription, Validators.required),
      'pressPic': new FormControl(pressPic, Validators.required),
      'spotifyId': new FormControl(spotifyId, Validators.required),
      'spotifyPlaylist': new FormControl(spotifyPlaylist, Validators.required),
      'youtubeLink': new FormControl(youtubeLink, Validators.required),
      'instagramLink': new FormControl(instagramLink, Validators.required),
      'facebookLink': new FormControl(facebookLink, Validators.required),
      'driveLink': new FormControl(driveLink, Validators.required),
      'urlName': new FormControl(urlName, Validators.required)
    });
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.artistForm.controls;
    console.log(controls)
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    console.log(invalid)
  }
}
