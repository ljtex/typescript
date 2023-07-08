import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'mat-select-with-compare';

  multiSelectEvent?: any;
  singleSelectEvent?: any;

  options = [
    {
      scientificName: "Merops nubicus",
      commonName: "Nubian bee-eater",
      description: "Open-source dedicated moratorium"
    },
    {
      scientificName: "Aegypius occipitalis",
      commonName: "Vulture, white-headed",
      description: "Synergized directional capability"
    },
    {
      scientificName: "Alopex lagopus",
      commonName: "Fox, arctic",
      description: "Object-based composite archive"
    },
    {
      scientificName: "Gyps bengalensis",
      commonName: "Oriental white-backed vulture",
      description: "Cross-platform transitional success"
    },
    {
      scientificName: "Ramphastos tucanus",
      commonName: "Toucan, red-billed",
      description: "Multi-channelled explicit pricing structure"
    },
    {
      scientificName: "Geochelone elegans",
      commonName: "Tortoise, indian star",
      description: "Organized empowering policy"
    },
    {
      scientificName: "Globicephala melas",
      commonName: "Whale, long-finned pilot",
      description: "Integrated logistical firmware"
    },
    {
      scientificName: "Graspus graspus",
      commonName: "Crab, sally lightfoot",
      description: "Triple-buffered cohesive internet solution"
    },
    {
      scientificName: "Sceloporus magister",
      commonName: "Lizard, desert spiny",
      description: "Customer-focused secondary emulation"
    },
    {
      scientificName: "Oncorhynchus nerka",
      commonName: "Sockeye salmon",
      description: "Advanced analyzing forecast"
    }
  ];

  selectedOptions = [
    {
      scientificName: "Alopex lagopus",
      commonName: "Fox, arctic",
      description: "Object-based composite archive"
    },
    {
      scientificName: "Gyps bengalensis",
      commonName: "Oriental white-backed vulture",
      description: "Cross-platform transitional success"
    },
    {
      scientificName: "Ramphastos tucanus",
      commonName: "Toucan, red-billed",
      description: "Multi-channelled explicit pricing structure"
    }
  ];

  selectedOption = {
    scientificName: "Alopex lagopus",
    commonName: "Fox, arctic",
    description: "Object-based composite archive"
  };

  constructor() {}

  ngOnInit() {}

  multiSelect($event: any) {
    this.multiSelectEvent = $event;
  }

  singleSelect($event: any) {
    this.singleSelectEvent = $event;
  }
}
