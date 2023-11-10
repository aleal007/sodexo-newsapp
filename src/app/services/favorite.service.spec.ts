import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;
  let expected:any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  beforeEach(() => {
    expected = {
      "content": [
          {
              "id": 1,
              "title": "NASA's Mars Fleet Will Still Conduct Science While Lying Low",
              "summary": "Rovers and orbiters will continue collecting limited data during a two-week communications pause due to the position of Earth, the Sun, and the Red Planet.",
              "publishedAt": "2023-11-10T17:44:00Z",
              "newsSite": "NASA",
              "imageUrl": "https://mars.nasa.gov/system/news_items/main_images/9512_PIA26202-web.jpg",
              "savedAt": "2023-11-10T18:05:45.914Z"
          },
          {
              "id": 2,
              "title": "SpaceNews 2023 Icon Awards honorees: Commercial Space Achievement of the Year",
              "summary": "Commercial space is no longer the sole domain of satellite telecommunications. Nearly every sector of the space enterprise is opening up to commercial providers. Two of our three finalists for this year’s Commercial Space Achievement award represent longstanding commercial pillars of the space industry: launch and satellite communications. The third is a pioneer in one of the most challenging space sectors to commercialize: human spaceflight.",
              "publishedAt": "2023-11-10T16:29:41Z",
              "newsSite": "SpaceNews",
              "imageUrl": "https://spacenews.com/wp-content/uploads/2023/10/Icon-High-Res-01white970v2-300x225.png",
              "savedAt": "2023-11-10T18:05:56.603Z"
          }
      ],
      "pageable": {
          "pageNumber": 0,
          "pageSize": 10,
          "sort": {
              "empty": true,
              "unsorted": true,
              "sorted": false
          },
          "offset": 0,
          "paged": true,
          "unpaged": false
      },
      "totalPages": 1,
      "totalElements": 2,
      "last": true,
      "size": 10,
      "number": 0,
      "sort": {
          "empty": true,
          "unsorted": true,
          "sorted": false
      },
      "numberOfElements": 2,
      "first": true,
      "empty": false
   }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return list of favorite news', () => {
    expect(service.getNewsFavorite(0).toBe(expected);
  });

});
