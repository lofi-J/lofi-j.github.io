// src/types/three/examples/jsm/loaders/FBXLoader.d.ts
declare module 'three/examples/jsm/loaders/FBXLoader' {
  import { Loader, LoadingManager, Group } from 'three';
  
  export class FBXLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: Group) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(FBXText: string, path: string): Group;
  }
}
