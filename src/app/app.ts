import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [DatePipe, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  public movieTitle: string = 'Rise of the Guardians';
  public movieDescription: string = 'When Pitch, an evil spirit, returns to planet Earth to assault the children and take over the world, a group of immortal guardians with extraordinary abilities join forces to protect the world';
  public movieReleaseDate: Date = new Date(2012, 10, 21);
  public movieImbdRating: string = '7,2/10'
  public movieGenre: string = 'Animation, Adventure, Fantasy, Kids & Family, and Action-Comedy'
  public moviePoster: string[] = [
    'https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_FMjpg_UX1000_.jpg'
  ]
  public alertTitle() {
    alert(this.movieTitle);
  }
  public titleInput: string = '';
  public moveOficialLink: string[] = [
    'https://www.imdb.com/title/tt1446192/'
  ]
}
