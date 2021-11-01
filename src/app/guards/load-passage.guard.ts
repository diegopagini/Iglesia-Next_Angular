import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { StoreService } from '../services/store.service';

@Injectable({
  providedIn: 'root',
})
export class LoadPassageGuard implements CanActivate {
  private store$!: Observable<string>;

  constructor(private storeService: StoreService, private router: Router) {
    this.store$ = this.storeService.checkStore();
  }

  canActivate(): boolean {
    let status: boolean = true;
    this.store$.pipe(take(1)).subscribe((value: any) => {
      value.text.length > 0
        ? (status = true)
        : ((status = false), this.router.navigateByUrl('/home'));
    });
    return status;
  }
}
