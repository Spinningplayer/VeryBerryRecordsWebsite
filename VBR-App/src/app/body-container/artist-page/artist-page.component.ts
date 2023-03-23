import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
  artist: Artist | undefined;
  safeYoutube!: SafeResourceUrl;
  safeSpotify!: SafeResourceUrl;

  constructor(private artistService: ArtistService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const artistName = String(routeParams.get('name'))

    this.artist = this.artistService.artists.find(artist => artist.urlName === artistName)

    this.safeYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(String(this.artist?.youtubeLink));
    this.safeSpotify = this.sanitizer.bypassSecurityTrustResourceUrl(String(this.artist?.spotifyPlaylist));
  }

}
