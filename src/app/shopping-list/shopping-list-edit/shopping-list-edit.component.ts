import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToList() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmounnt = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmounnt);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
