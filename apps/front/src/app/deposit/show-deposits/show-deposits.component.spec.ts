import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDepositsComponent } from './show-deposits.component';

describe('ShowDepositsComponent', () => {
  let component: ShowDepositsComponent;
  let fixture: ComponentFixture<ShowDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDepositsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
