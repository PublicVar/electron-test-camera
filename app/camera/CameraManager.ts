
export class CameraManager {

    private _isOn: boolean = false;
    private stream: MediaStream
    constructor(private videoDomElement: HTMLVideoElement) {

    }

    startCamera(): void {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true }, (stream: MediaStream) => {
                this.videoDomElement.src = window.URL.createObjectURL(stream);
                this._isOn = true;
                this.stream = stream;
            }, (e: Error) => {
                console.log('Error : ' + e);
            });
        }
    }

    stopCamera():void{
        this.stream.getVideoTracks().map((track: MediaStreamTrack ) => {
            track.stop();
        });
        this._isOn = false;
    }

    takePicture(canvas: HTMLCanvasElement, preview: HTMLImageElement): void {
        if (this.videoDomElement) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.videoDomElement, 0, 0, canvas.width, canvas.height);
            preview.src = canvas.toDataURL('image/webp');
        }

    }

    get isOn(): boolean{
        return this._isOn;
    }
}