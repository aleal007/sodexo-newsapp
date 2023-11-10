import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;
  let url: any = 'https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10';
  let expected: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService);
  });

  beforeEach(() => {
    expected = {
      "count": 12083,
      "next": "https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10&offset=10",
      "previous": null,
      "results": [
          {
              "id": 21448,
              "title": "NASA's Mars Fleet Will Still Conduct Science While Lying Low",
              "url": "https://mars.nasa.gov/news/9512/",
              "image_url": "https://mars.nasa.gov/system/news_items/main_images/9512_PIA26202-web.jpg",
              "news_site": "NASA",
              "summary": "Rovers and orbiters will continue collecting limited data during a two-week communications pause due to the position of Earth, the Sun, and the Red Planet.",
              "published_at": "2023-11-10T17:44:00Z",
              "updated_at": "2023-11-10T17:44:28.874000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21447,
              "title": "SpaceNews 2023 Icon Awards honorees: Commercial Space Achievement of the Year",
              "url": "https://spacenews.com/spacenews-2023-icon-awards-honorees-commercial-space-achievement-of-the-year/",
              "image_url": "https://spacenews.com/wp-content/uploads/2023/10/Icon-High-Res-01white970v2-300x225.png",
              "news_site": "SpaceNews",
              "summary": "Commercial space is no longer the sole domain of satellite telecommunications. Nearly every sector of the space enterprise is opening up to commercial providers. Two of our three finalists for this year’s Commercial Space Achievement award represent longstanding commercial pillars of the space industry: launch and satellite communications. The third is a pioneer in one of the most challenging space sectors to commercialize: human spaceflight.",
              "published_at": "2023-11-10T16:29:41Z",
              "updated_at": "2023-11-10T16:34:11.520000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21446,
              "title": "CNES Publishes Call for the Demonstration of Reusable Launch Systems",
              "url": "https://europeanspaceflight.com/cnes-publishes-call-for-the-demonstration-of-reusable-launch-systems/",
              "image_url": "https://europeanspaceflight.com/wp-content/uploads/2023/11/CNES-Publishes-Call-for-the-Demonstration-of-Reusable-Launch-Systems.jpg",
              "news_site": "European Spaceflight",
              "summary": "The launch directorate of the French space agency CNES has published a call to support industry-led demonstrations of semi-reusable micro and mini-launcher systems that will include the deployment of a passenger payload. In the call’s introduction, CNES states that the reuse of the first stage of European launch vehicles is one of nine of its […]\nThe post CNES Publishes Call for the Demonstration of Reusable Launch Systems appeared first on European Spaceflight.",
              "published_at": "2023-11-10T14:41:03Z",
              "updated_at": "2023-11-10T14:45:55.261000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21445,
              "title": "Bulgaria signs Artemis Accords",
              "url": "https://spacenews.com/bulgaria-signs-artemis-accords/",
              "image_url": "https://spacenews.com/wp-content/uploads/2023/11/53320634591_0733925ae9_k-300x200.jpg",
              "news_site": "SpaceNews",
              "summary": "Bulgaria has signed the U.S.-led Artemis Accords outlining principles for cooperation in space exploration, becoming the latest European nation to join.",
              "published_at": "2023-11-10T12:55:46Z",
              "updated_at": "2023-11-10T13:04:11.357000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21443,
              "title": "Daily Telescope: A spectacular view of a 10,000-year-old supernova remnant",
              "url": "https://arstechnica.com/space/2023/11/daily-telescope-peeling-back-the-layers-of-the-garlic-nebula/",
              "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2023/11/garlic-nebula.jpeg",
              "news_site": "Arstechnica",
              "summary": "\"Without narrowband filters, it’s almost impossible to photograph.\"",
              "published_at": "2023-11-10T12:30:53Z",
              "updated_at": "2023-11-10T12:54:26.684000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21442,
              "title": "ESA Joins U.S.-European Starlab Commercial Space Station Project",
              "url": "https://spacepolicyonline.com/news/esa-joins-u-s-european-starlab-commercial-space-station-project/",
              "image_url": "https://spacepolicyonline.com/wp-content/uploads/2023/11/Starlab-300x252.png",
              "news_site": "SpacePolicyOnline.com",
              "summary": "ESA just signed a memorandum of understanding with the U.S. company Voyager Space and Europe’s Airbus to collaborate on the Starlab commercial space station project. The announcement comes three days […]",
              "published_at": "2023-11-10T04:54:04Z",
              "updated_at": "2023-11-10T05:06:12.323000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21439,
              "title": "Satellite industry at odds over proposed power limit review ahead of WRC-23",
              "url": "https://spacenews.com/satellite-industry-at-odds-over-proposed-power-limit-review-ahead-of-wrc-23/",
              "image_url": "https://spacenews.com/wp-content/uploads/2019/11/49006240433_ba94e47442_k-300x200.jpg",
              "news_site": "SpaceNews",
              "summary": "A proposal to review satellite power limits set more than a decade ago to avoid signal interference between different orbits is one of the most divisive among operators ahead of WRC-23, a four-week meeting kicking off Nov. 20 in Dubai to update global spectrum rules.",
              "published_at": "2023-11-09T22:12:48Z",
              "updated_at": "2023-11-09T22:14:10.704000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21440,
              "title": "Rocket Lab to launch hypersonic test vehicle for the Defense Innovation Unit",
              "url": "https://spacenews.com/rocket-lab-to-launch-hypersonic-test-vehicle-for-the-defense-innovation-unit/",
              "image_url": "https://spacenews.com/wp-content/uploads/2023/11/Screenshot-2023-11-09-at-3.29.17%E2%80%AFPM-300x133.png",
              "news_site": "SpaceNews",
              "summary": "Rocket Lab announced a new mission for its suborbital launch vehicle — a 3D-printed hypersonic drone built by Australia’s Hypersonix for the U.S. Defense Department.",
              "published_at": "2023-11-09T22:10:14Z",
              "updated_at": "2023-11-09T22:14:10.707000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21438,
              "title": "Iridium, Qualcomm end satellite-to-phone partnership",
              "url": "https://www.cnbc.com/2023/11/09/iridium-announces-end-of-qualcomm-satellite-to-phone-partnership.html",
              "image_url": "https://image.cnbcfm.com/api/v1/image/107100476-16599735222022-08-08t154222z_307289344_rc29qa90egp5_rtrmadp_0_qualcomm-glofoundries.jpeg",
              "news_site": "CNBC",
              "summary": "U.S. semiconductor giant Qualcomm ended its partnership with satellite communications company Iridium to provide satellite-to-phone services, Iridium announced on Thursday.",
              "published_at": "2023-11-09T21:59:46Z",
              "updated_at": "2023-11-09T22:34:47.577000Z",
              "featured": false,
              "launches": [],
              "events": []
          },
          {
              "id": 21436,
              "title": "Rocket Lab reports results for Q3 2023",
              "url": "https://www.teslarati.com/rocket-lab-q3-2023-earnings-results/",
              "image_url": "https://www.teslarati.com/wp-content/uploads/2023/07/53054363868_648bd94c00_k.jpg",
              "news_site": "Teslarati",
              "summary": "Rocket Lab’s (NASDAQ: RKLB) Q3 results are out and revealed they are still looking good financially despite the launch failure that occurred...",
              "published_at": "2023-11-09T20:04:53Z",
              "updated_at": "2023-11-09T20:04:56.774000Z",
              "featured": false,
              "launches": [],
              "events": []
          }
      ]
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return list of news', () => {
    expect(service.getListNews(url).toBe(expected);
  });
});
