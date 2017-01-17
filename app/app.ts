import { CameraManager } from './camera/CameraManager'

const cameraManager = new CameraManager(document.querySelector('video'));

function takePicture() {
    cameraManager.takePicture(document.querySelector('canvas'), <HTMLImageElement>document.querySelector('.preview'));
}

function turnCameraOn() {
    cameraManager.isOn ? cameraManager.stopCamera() : cameraManager.startCamera();
}