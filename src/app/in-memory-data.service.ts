import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {id: 1, title: 'Aquaman', image: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Aquaman_poster.jpg', description: 'Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.'},
      {id: 2, title: 'Scarface', image: 'https://is5-ssl.mzstatic.com/image/thumb/Video/5d/b3/9a/mzl.pfdbgmnr.jpg/268x0w.jpg', description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.'},
      {id: 3, title: 'Firstman', image: 'https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg', description: 'A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.'},
      {id: 4, title: 'Drive', image: 'https://resizing.flixster.com/LJraj4s6Rj-TnsGWEMC418PoJjg=/206x305/v1.bTsxMjg2Mzk5MTtqOzE3OTY4OzEyMDA7MTIwMDsxNjAw', description: 'A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor.'},
      {id: 5, title: 'Superman', image: 'https://prodimage.images-bn.com/pimages/0883929091720_p0_v5_s550x406.jpg', description: 'An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home\'s first and greatest superhero.'},
      {id: 6, title: 'Bumblebee', image: 'https://tfwiki.net/mediawiki/images2/thumb/e/ea/TF-Alliance03_Cover_Nizzi.jpg/300px-TF-Alliance03_Cover_Nizzi.jpg', description: 'On the run in the year of 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.'},
      {id: 7, title: 'Glass', image: 'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_UY268_CR3,0,182,268_AL_.jpg', description: 'Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.'}
  
  ];
  return {movies};
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 8;
  }
  
  constructor() { }
}
