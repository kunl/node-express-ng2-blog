export default `
    <input [(ngModel)]="title" #ctrl="ngModel" required> <br>
    
    <textarea name="" [(ngModel)]="content" id="" cols="30" rows="10"></textarea> <br>
    
    <button (click)="submit()">Set value</button>
`