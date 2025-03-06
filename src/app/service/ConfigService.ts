import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';



// ! Esse service nao tem uso
@Injectable({ providedIn: 'root' })
export class ConfigService {
	private config: any;

	constructor(/*private http: HttpClient*/) { }

	async loadConfig(): Promise<void> {
		// todo nao funcionou
		// this.config = await firstValueFrom(this.http.get('assets/config.json'));
	}

	getConfig(key: string): any {
		return this.config ? this.config[key] : null;
	}
	
	getConfigUsarLocalStorage():boolean{
		return this.config ? this.config["usarLocalStorage"] : false;
	}
}