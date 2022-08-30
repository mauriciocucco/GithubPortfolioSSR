import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username = environment.username;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.setTags();
  }

  private setTags(): void {
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s GitHub portfolio`
      },
      {
        name: 'author',
        content: this.username
      }
    ]);
  }
}
