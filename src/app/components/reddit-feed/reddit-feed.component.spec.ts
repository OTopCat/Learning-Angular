import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditFeedComponent } from './reddit-feed.component';

describe('RedditFeedComponent', () => {
  let component: RedditFeedComponent;
  let fixture: ComponentFixture<RedditFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
