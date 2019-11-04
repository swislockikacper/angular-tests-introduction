import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('contains div', () => {
    const div = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(div).toBeTruthy();
  });

  it('contains p', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(p).toBeTruthy();
    expect(p.textContent).toContain('Counter value:');
  });

  it('should be 0 after component create', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(p).toBeTruthy();
    expect(p.textContent).toContain(0);
  });

  it('should add value after increase click', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    const increaseButton = fixture.debugElement.query(By.css('#increase')).nativeElement;

    expect(p.textContent).toContain(0);
    increaseButton.click();
    fixture.detectChanges();
    expect(p.textContent).toContain(1);
  });

  it('should not change value after decrease click when counter = 0', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    const decreaseButton = fixture.debugElement.query(By.css('#decrease')).nativeElement;

    expect(p.textContent).toContain(0);
    decreaseButton.click();
    fixture.detectChanges();
    expect(p.textContent).toContain(0);
  });

  it('should add value after increase click and change value to 0 after decrease click', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    const decreaseButton = fixture.debugElement.query(By.css('#decrease')).nativeElement;
    const increaseButton = fixture.debugElement.query(By.css('#increase')).nativeElement;

    expect(p.textContent).toContain(0);

    increaseButton.click();
    fixture.detectChanges();
    expect(p.textContent).toContain(1);

    decreaseButton.click();
    fixture.detectChanges();
    expect(p.textContent).toContain(0);
  });
});
