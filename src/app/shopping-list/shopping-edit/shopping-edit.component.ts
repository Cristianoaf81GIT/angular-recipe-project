import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef;

  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onAddItem(){
    const nameValue: string = this.nameInputRef.nativeElement.value;
    const amountValue: number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient = new Ingredient(nameValue, amountValue);
    this.slService.addIngredient(newIngredient);
  }
}
