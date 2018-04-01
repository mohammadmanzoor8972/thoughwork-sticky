import { Injectable } from '@angular/core';

@Injectable()
export class WallsService {

  constructor() { }

  getWalls(){
    return [{
      "wallId":1,
      "title": "What wen well",
      "theme": "red",
      "data": [
        { "id": 1, "text": "mohan" },
        { "id": 2, "text": "ram" },
        { "id": 3, "text": "cost" },
        { "id": 4, "text": "con" },
      ]
    },
    {
      "wallId":2,
      "title": "What can be improved",
      "theme": "green",
      "data": [
        { "id": 1, "text": "mohan" },
        { "id": 2, "text": "free" },
        { "id": 3, "text": "excess" },
        { "id": 4, "text": "con" },
      ]
    },
    {
      "wallId":3,
      "title": "Start doing",
      "theme": "magenta",
      "data": [
        { "id": 1, "text": "mohan" },
        { "id": 2, "text": "ram" },
        { "id": 3, "text": "india" },
        { "id": 4, "text": "con" },
      ]
    },
    {
      "wallId":4,
      "title": "Action items",
      "theme": "yellow",
      "data": [
        { "id": 1, "text": "shafquat" },
        { "id": 2, "text": "azmat" },
        { "id": 3, "text": "mohan" },
        { "id": 4, "text": "con" },
      ]
    }]
  }

}
