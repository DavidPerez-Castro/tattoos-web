import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-menuuser',
  templateUrl: './menuuser.component.html',
  styles: ``
})
export class MenuuserComponent {

  @Output() logoutClicked = new EventEmitter<void>();

  constructor(public authService: AuthService) {}

  onLogoutClick(): void {
    this.logoutClicked.emit();
  }

}
