import { ComponentFixture, tick, TestBed, fakeAsync, async } from '@angular/core/testing';


import { UnittestComponent, AlertService, TranslateFileService } from './unittest.component';

let component: UnittestComponent;
let fixture: ComponentFixture<UnittestComponent>;



export class TranslateFileServiceMock {
 getVideoFiles (search: string): Promise<any[]> {
    const fileList = [];

    return new Promise<any[]>((resolve, reject) => {
       if (search === 'error') return reject('an error occured');
        return resolve(fileList.filter(f => f.label.includes(search)));
    });
  }
}


describe('UnittestComponent', () => {
  let component: UnittestComponent;
  let fixture: ComponentFixture<UnittestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnittestComponent],
      providers: [
        AlertService,
        { provide: TranslateFileService, useClass: TranslateFileServiceMock }]
    });

    fixture = TestBed.createComponent(UnittestComponent);
    component = fixture.componentInstance;

  });


  it('should call the alert service when something wrong', fakeAsync(()=> {
    spyOn(component.alert, 'error');
    component.onInputChangeX('error');
    fixture.whenStable().then((() => {
      expect(component.alert.error).toHaveBeenCalledWith('an error occurred');
    }))
  }))

  it('should call the alert service in case something went wrong getting the list of files', fakeAsync(() => {
    spyOn(component.alert, 'error');
    component.onInputChangeX('error');
    tick();
    expect(component.alert.error).toHaveBeenCalledWith('an error occured');
  }));

  it('should get the list of files normally', fakeAsync(() => {
    spyOn(component.alert, 'error');
    component.onInputChangeX('svg');
    tick();
    expect(component.alert.error).not.toHaveBeenCalledWith('an error occured');
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
