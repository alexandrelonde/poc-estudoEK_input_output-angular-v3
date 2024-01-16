import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-input-filho',
  templateUrl: './input-filho.component.html',
  styleUrls: ['./input-filho.component.scss']
})
export class InputFilhoComponent {

  // Ao passar required: true como argumento, torna a entrada de dado obrigatória
  @Input({required: true}) bankName!: string;

  // Ao passar alias: 'account-id' como atributo, cria um aplido que "liga" os components
  // Ao passarmos como atributo transforma: numberAttribute estamos transformando o id string do compomente pai em id number compomente filho
  @Input({alias: 'account-id', transform: numberAttribute}) id: number = 0;

  // Ao passar como atributo transform: booleanAttribute estamos transformando a variavel string do compoment pai para variavel boolean compoment filho
  @Input({transform: booleanAttribute}) status: boolean = true;
}
