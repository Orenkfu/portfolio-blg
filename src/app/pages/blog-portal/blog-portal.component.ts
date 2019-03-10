import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-blog-portal',
  templateUrl: './blog-portal.component.html',
  styleUrls: ['./blog-portal.component.scss']
})
export class BlogPortalComponent implements OnInit {

  constructor() { }
  questions: Question[] = [
    {
      body: 'How are you?',
      answers: [
        {
          body: 'Fine',
          tags: ['Meh', 'OK', 'Whatever']
        },
        {
          body: 'Just Dandy',
          tags: ['Great', 'Awesome', 'Good']
        },
        {
          body: 'Fantastic',
          tags: ['Great', 'Awesome', 'Amazing', 'Wonderful']
        },
        {
          body: 'Crap',
          tags: ['Meh', 'Bad', 'Aweful', 'Disaster']
        }]
    },
    {
      body: 'What"s up?',
      answers: [
        {
          body: 'Fine',
          tags: ['Meh', 'OK', 'Whatever']
        },
        {
          body: 'Just Dandy',
          tags: ['Great', 'Awesome', 'Good']
        },
        {
          body: 'Fantastic',
          tags: ['Great', 'Awesome', 'Amazing', 'Wonderful']
        },
        {
          body: 'Crap',
          tags: ['Meh', 'Bad', 'Aweful', 'Disaster']
        }]
    },
    {
      body: 'Who Are You?',
      answers: [
        {
          body: 'Developer',
          tags: ['IT', 'Software', 'Tech', 'Programming']
        },
        {
          body: 'Entrepeneur',
          tags: ['Lame', 'Founder', 'Marketing', 'General']
        },
        {
          body: 'Marketer',
          tags: ['Fool', 'Trickster', 'Shortcuts', 'Growth']
        }
      ]
    }, {
      body: 'Why Are You?',
      answers: [
        {
          body: 'Money',
          tags: ['Greed', 'Pragmatism', 'Tech', 'Entrepenur', 'Meh']
        },
        {
          body: 'Love',
          tags: ['Programming', 'Growth', 'Awesome']
        },
        {
          body: 'Options',
          tags: ['Whatever', 'Shortcuts', 'Tech', 'OK']
        }
      ]

    }]
  ngOnInit() {
  }

}
