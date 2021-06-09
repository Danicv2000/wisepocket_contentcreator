import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Campaign } from '../../../models/campaign.model';
import { Imagen } from '../../../models/image.model';
import { FileUploadService } from '../../../services/file-upload.service';
// import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy 
{
  form: FormGroup;

  horizontalStepperStep1: FormGroup;
  horizontalStepperStep2: FormGroup;
  horizontalStepperStep3: FormGroup;
  readonly maxSize = 104857600;
  gameicon: string = 'gameicon';
 @ViewChild('fileDorp', {static: false}) inputFile: ElementRef;
  
  private _unsubscribeAll: Subject<any>;
  files: File[] = []; 
  gameIconf: File = undefined;
  image1: File = undefined;
  image2: File = undefined;
  image3: File = undefined;
  image4: File = undefined;
  
  constructor(
    private _formBuilder: FormBuilder,
    // private _fuseTranslationLoaderService: FuseTranslationLoaderService

  ) 
  {

    // Load the translations
    // this._fuseTranslationLoaderService.loadTranslations(english, spanish);

    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void 
  {
    this.horizontalStepperStep1 = this._formBuilder.group({
      nameGame     : ['', Validators.required],
      cant_preg    : ['',[ Validators.required, Validators.maxLength(20)]],
      cant_resp    : ['', Validators.required]
    });
    
    this.horizontalStepperStep2 = this._formBuilder.group({
      redacte      : ['', Validators.required],
      redacte1     : ['', Validators.required],
      redacte2     : ['', Validators.required],
      redacte3     : ['', Validators.required],
      redacte4     : ['', Validators.required]
    });
  }
  

  onChage(event){
    console.log(event);
    console.log(this.inputFile);
  }
  onSelectIcon(event){
   console.log(event.addedFiles);
   this.gameIconf = event.addedFiles[0];
   this.files.push(event.addedFiles[0]);
  }

  ngOnDestroy(): void
  {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
  }

  // onSelectedChange(): void
  // {
  //       this._mailService.toggleSelectedMail(this.mail.id);
  // }
  onSelect(event) {
    console.log(event);
    switch (event.source.id) {
        case "image1":
            this.image1 = event.addedFiles[0];
            break;
        case "image2":
            this.image2 = event.addedFiles[0];
            break;
        case "image3":
            this.image3 = event.addedFiles[0];
            break;
        case "image4":
            this.image4 = event.addedFiles[0];
            break;
        default:
            break;
    }

  }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Finish the horizontal stepper
     

    async finishHorizontalStepper()
    {
        let dataCamp = new Campaign()
        dataCamp.titulo = this.horizontalStepperStep1.get('nameCampaign').value;
        dataCamp.descripcion = this.horizontalStepperStep1.get('description').value;
        dataCamp.phone= this.horizontalStepperStep2.get('phone').value;
        dataCamp.contactoEmail = this.horizontalStepperStep2.get('email').value;
        dataCamp.direccionPostal = this.horizontalStepperStep2.get('postalCode').value;
        dataCamp.colorPrincipal = this.horizontalStepperStep3.get('primaryColor').value;
        dataCamp.colorSecundario = this.horizontalStepperStep3.get('secondaryColor').value;
        dataCamp.country = this.horizontalStepperStep3.get('countries').value;
        dataCamp.city = this.horizontalStepperStep3.get('cities').value;
        dataCamp.state = this.horizontalStepperStep3.get('states').value;
        dataCamp.contactoWhatsapp = this.horizontalStepperStep2.get('phone').value;
        dataCamp.contactoFacebook = this.horizontalStepperStep2.get('website').value;
        dataCamp.contactoTelegram = this.horizontalStepperStep2.get('website').value;
        if(this.campIconf){
            console.log(this.campIconf);
            await this.imageService.addImage(this.campIconf).then(img=>{
                console.log(img);
                //let data = img['data'];
                dataCamp.logo = img[0];
            });
        }
        let imagesCarruselIds = [];
        if(this.files.length>0){
            await this.imageService.addImage(this.files)
            .then((img)=>{
                console.log(img);
                let data = img['data'];
                imagesCarruselIds = img
                //dataCamp.carrusel = img;
            });
        }
        console.log(dataCamp);
        await this.campService.addCampaign(dataCamp)
       .pipe(takeUntil(this._unsubscribeAll))
       .subscribe(async campaign =>{
           if(imagesCarruselIds.length>0){
            await this.campService.asociateImages(imagesCarruselIds,campaign.id);
           }
           console.log(campaign);
        },error=>{
           console.log(error)
       });
        alert('You have finished the horizontal stepper!');
    }
*/

}
