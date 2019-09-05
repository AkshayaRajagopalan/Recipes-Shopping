import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddToList() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmounnt = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmounnt);
    this.ingredientAdded.emit(newIngredient);
  }

}
