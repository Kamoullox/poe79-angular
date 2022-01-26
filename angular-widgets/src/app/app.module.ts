import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';
import { AwBlogComponent } from './components/aw-blog/aw-blog.component';
import { AwBlogFormComponent } from './components/aw-blog-form/aw-blog-form.component';
import { FormsModule } from '@angular/forms';
import { BlogArticleComponent } from './components/aw-blog-article/blog-article.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    AwBlogComponent,
    AwBlogFormComponent,
    BlogArticleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AwTagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
