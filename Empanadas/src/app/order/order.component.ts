import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  variedad: any[] = [
    {id: 1, nombre: 'Pollo'},
    {id: 2, nombre: 'Carne'},
    {id: 3, nombre: 'Humita'}
  ];


  pedido: any[] = [
    
  ]

  variedadesSeleccionadas: string[] = [];


  pushPedido(vari: any){

    const variedadEnPedido = this.pedido.find(item => item.nombre === vari.nombre);

    if (!variedadEnPedido) {
      this.pedido.push({ nombre: vari.nombre, cantidad: 1 });
    }

  }

  addMoreCant(p: any){
    p.cantidad += 1;
  }

  decreaseQuantity(p: any){
    p.cantidad -= 1;
    if (p.cantidad < 1) {
      const index = this.pedido.findIndex(item => item === p);
      if (index !== -1) {
        this.pedido.splice(index, 1);
      }
    }
  }


  //logica de la ventana modal al finalizar el pedido

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmPedido(p: any) {

    this.sendPedidoToServer(this.pedido);
   
    this.closeModal();
    
  }
  

  constructor(private httpClient: HttpClient) {}

  sendPedidoToServer(pedido: any[]) {
    
    const apiUrl = 'http://localhost:3000/api/pedido';
  
    
    this.httpClient.post(apiUrl, pedido).subscribe({
      next: (response) => {
        console.log('Pedido enviado con éxito', response);
      },
      error: (error) => {
        console.error('Error al enviar el pedido', error);
      }
    });
  }
}
