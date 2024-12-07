import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [NgFor,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  athe='@'

  Allusers=[

    {
      name:'Alexa Roy',
      image:'../../assets/user1.jpg'
    },
    {
      name:'Gunda Bhai',
      image:'../../assets/user2.jpg'
    },
    {
      name:'poppy',
      image:'../../assets/user5.jpg'
    },
    {
      name:' Angel Priya',
      image:'../../assets/user3.jpg'
    },
    {
      name:'Dhinchak Pooja',
      image:'../../assets/user4.jpg'
    }
   
  ]


  stories=[
      
    {
      name:'Dhinchak Pooja',
      image:'../../assets/user4.jpg'
    },
    {
      name:'Alexa Roy',
      image:'../../assets/user1.jpg'
    },
 
    {
      name:'poppy',
      image:'../../assets/user5.jpg'
    },{
      name:'Gunda Bhai',
      image:'../../assets/user2.jpg'
    },
    {
      name:'Gunda Bhai',
      image:'../../assets/user2.jpg'
    },

  ]
  posts=[ 

    {
      name:'Dhinchak Pooja',
      username:'dinchak',
      date:'14.09.2020 - 10:00AM',
      bio:'The word homeowner has the word meow in it. Good luck pronouncing it correctly ever again.',
      image:'../../assets/post1.jpg'
    },
    {
      name:'Alexa Roy',
      image:'../../assets/post2.jpg',
      username:'dinchak',
      date:'14.09.2020 - 10:00AM',
      bio:'The word homeowner has the word meow in it. Good luck pronouncing it correctly ever again.',
    },
 
    {
      name:'poppy',
      image:'../../assets/user5.jpg',
      username:'dinchak',
      date:'14.09.2020 - 10:00AM',
      bio:'The word homeowner has the word meow in it. Good luck pronouncing it correctly ever again.',
    },{
      name:'Gunda Bhai',
      image:'../../assets/user2.jpg',
      username:'dinchak',
      date:'14.09.2020 - 10:00AM',
      bio:'The word homeowner has the word meow in it. Good luck pronouncing it correctly ever again.',
    },
    {
      name:'Gunda Bhai',
      image:'../../assets/user2.jpg',
      username:'dinchak',
      date:'14.09.2020 - 10:00AM',
      bio:'The word homeowner has the word meow in it. Good luck pronouncing it correctly ever again.',
    },

  ]

  notif=['alexa09 like your post','amman like your post','rajababu like and comment on your post','baburao like your post','kajubadam comment on your post','arajaao like your post','veru like your post','ninja like your post']



}
