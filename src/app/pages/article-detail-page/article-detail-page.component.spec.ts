import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailPageComponent } from './article-detail-page.component';

describe('ArticleDetailPageComponent', () => {
  let component: ArticleDetailPageComponent;
  let fixture: ComponentFixture<ArticleDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
