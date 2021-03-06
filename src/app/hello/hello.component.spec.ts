import {async, ComponentFixture, TestBed,} from '@angular/core/testing';

import {HelloComponent} from './hello.component';
import {NameService} from '../name.service';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;
  let namePromiseResolve: any;

  beforeEach(async(() => {
    const mockNameService: NameService = {
      get: () => new Promise(resolve => namePromiseResolve = resolve)
    };

    TestBed.configureTestingModule({
      declarations: [HelloComponent],
      providers: [
        {
          provide: NameService,
          useValue: mockNameService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the name hasn\'t loaded yet', () => {
    it('does not emit a change event', () => {
      let hasEmitted = false;
      component.name.subscribe((e: string) => hasEmitted = true);

      expect(hasEmitted).toEqual(false);
    });
  });

  describe('when the name has loaded', () => {
    it('emits a change event', async () => {
      let emittedValue = null;

      component.name.subscribe(e => emittedValue = e);
      namePromiseResolve('cadabrax');
      await fixture.whenStable();

      expect(emittedValue).toEqual('cadabrax');
    });
  });
});

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
