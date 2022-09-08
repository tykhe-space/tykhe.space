import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TrustHtmlPipe } from "./trust-html.pipe";

@NgModule({
	imports:      [ CommonModule],
	declarations: [ TrustHtmlPipe],
	exports:      [ TrustHtmlPipe],
  })
  export class TrustModule { }