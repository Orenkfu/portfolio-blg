import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean orci nulla, sagittis nec faucibus ut, congue at neque. Curabitur tincidunt convallis dui, a bibendum nunc faucibus nec. Vestibulum hendrerit nulla vel dui sagittis condimentum. Sed molestie lobortis lobortis. Nam lacinia mollis turpis suscipit iaculis. Maecenas tincidunt lectus vitae blandit ullamcorper. Sed congue, felis vitae tincidunt tempor, dolor tellus hendrerit nibh, vel bibendum magna risus id ex. Phasellus in ligula condimentum, fringilla lacus nec, aliquam tortor. Cras nec sodales mi. Curabitur eu fermentum diam, vehicula dignissim ante. Proin volutpat tempus ligula. Quisque et ipsum odio.

    Proin et volutpat nulla, vitae maximus nunc. Vestibulum tempus quis risus eu rutrum. Sed mollis elit at erat fringilla, quis semper felis suscipit. Proin ante ligula, rutrum ut leo at, suscipit mollis diam. Nam in massa id ligula pulvinar pellentesque. Fusce convallis ultrices blandit. Proin ultrices magna sem, nec consectetur magna imperdiet in. Phasellus viverra sit amet ligula ut volutpat. Sed a nulla rutrum, volutpat nibh ac, blandit purus. Fusce pharetra dignissim ipsum, at gravida elit pretium quis.
    
    Sed ut enim eget velit fringilla aliquam. Vestibulum quis est sagittis, facilisis neque non, hendrerit velit. Nullam enim nulla, suscipit sit amet molestie eget, tristique et turpis. Cras bibendum nibh turpis. Pellentesque vitae nisi et risus feugiat accumsan. Sed ut molestie diam, id sagittis justo. Quisque in augue lectus. Vivamus imperdiet nulla orci, in cursus lectus lacinia ac. Praesent auctor est at magna tincidunt, sit amet dignissim lorem tristique. Mauris quis augue odio. Nullam tincidunt dolor velit, tempus auctor libero commodo vitae. In non justo hendrerit enim efficitur egestas ut in lacus. Nam tempus neque eu tortor consequat, vel venenatis metus pretium. Maecenas et elementum sem, in lacinia tortor.
    
    Aenean efficitur auctor lectus ac vehicula. Nulla ligula diam, vestibulum sit amet libero in, vestibulum blandit lorem. Morbi sit amet consectetur mi. Proin vehicula condimentum augue. Vivamus volutpat purus eget sodales congue. Sed ac aliquam erat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    
    Sed auctor ante vitae dolor interdum, quis accumsan felis eleifend. In quis varius diam. Praesent quis sapien vel quam cursus commodo vitae mollis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat justo interdum scelerisque consectetur. Aliquam vel enim at neque cursus eleifend. Ut egestas eleifend libero, sed vestibulum dolor pretium ultrices. Nulla convallis dictum dolor ac tincidunt. Aenean sed sapien vulputate, venenatis tortor ut, fermentum elit. Mauris aliquam elementum ullamcorper. Praesent congue lobortis nunc, in ornare ligula imperdiet eu. Nullam neque diam, ornare ac dictum ac, rhoncus a mi. Ut at risus non massa congue tempor. Pellentesque commodo dui ut diam porttitor, sed tincidunt nulla volutpat. Praesent commodo auctor lobortis. Morbi ultricies ultricies hendrerit.`

  blogs: any[] = [
    {
      title: "The Best Blog In Your Life", content: this.loremIpsum,
      id: 'asdf123412a', tags: ['love', 'dogs', 'life']
    },
    {
      title: "Dogs are nice", content: this.loremIpsum,
      id: 'fwdf123412a', tags: ['love', 'dogs', 'life']

    },
    {
      title: "Do you overestimate your dog?", content: this.loremIpsum,
      id: 'asdf1eq23412a', tags: ['love', 'dogs', 'life']
    },
    {
      title: "Is your dog truly your best friend?", content: this.loremIpsum,
      id: '1234dsa', tags: ['love', 'dogs', 'life']
    },
    {
      title: "You won't believe what this dog did", content: this.loremIpsum,
      id: 'f3f2a', tags: ['love', 'dogs', 'life']
    },
    {
      title: "This man took his dog to the park, what happened next changed his life", content: this.loremIpsum,
      id: '12e1as', tags: ['love', 'dogs', 'life']
    },
    {
      title: "The Best Dogs That You Just Can't Believe", content: this.loremIpsum,
      id: 'asdf123412a', tags: ['love', 'dogs', 'life']
    }
  ]
}
