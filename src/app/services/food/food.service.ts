import { Injectable } from '@angular/core';
import {Food} from '../../shared/model/Food';
import {Tag} from '../../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsByTagSearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
          food.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags():Tag[]{
    return[
      { name:'All', count: 7 },
      { name:'Gateau', count: 5 },
      { name:'Glace', count: 3 },
      { name:'Boisson', count: 0 }
    ]
  }

  getAllFoodsByTag(tag: string):Food[]{

    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

    getAll():Food[]{
      return [
        {
          id: 1,
          name:'Donut',
          price: 3,
          cookTime:'10-15',
          favorite: false,
          origins:['Hollande','France'],
          stars: 3.5,
          imageUrl: 'assets/images/foods/food-1.jpg',
          tags: ['Gateau'],
        },
        {
          id: 2,
          name:'Pancake',
          price: 2.50,
          cookTime:'5-10',
          favorite: false,
          origins:['Grec','Angleterre'],
          stars: 4,
          imageUrl: 'assets/images/foods/food-2.jpg',
          tags: ['Gateau'],
        },
        {
        id: 3,
        name:'Moelleux au Chocolat',
        price: 3,
        cookTime:'5-10',
        favorite: true,
        origins:['Francaise','Italy'],
        stars: 5,
        imageUrl: 'assets/images/foods/food-3.jpg',
        tags: ['Gateau'],
        },
        { id: 4,
          name:'Fraisier',
          price: 3.50,
          cookTime:'10-15',
          favorite: true,
          origins:['USA','Italy','France'],
          stars: 4.5,
          imageUrl: 'assets/images/foods/food-4.jpg',
          tags: ['Gateau'],
        },
        { id: 5,
          name:'Tarte au Pomme et Glace Vanille',
          price: 5,
          cookTime:'10-15',
          favorite: false,
          origins:['USA','Allemagne'],
          stars: 3.5,
          imageUrl: 'assets/images/foods/food-5.jpg',
          tags: ['Glace','Gateau'],
        },
        {
          id: 6,
          name:'Glace au chocolat',
          price: 3.50,
          cookTime:'5-10',
          favorite: false,
          origins:['Italie','USA'],
          stars: 4,
          imageUrl: 'assets/images/foods/food-6.jpeg',
          tags: ['Glace'],
        },
        {
          id: 7,
          name:'Glace a l eau',
          price: 4.5,
          cookTime:'5-10',
          favorite: false,
          origins:['Canada','Espagne',],
          stars: 3.5,
          imageUrl: 'assets/images/foods/food-7.jpg',
          tags: ['Glace'],
        },
      ]

    }
  }

