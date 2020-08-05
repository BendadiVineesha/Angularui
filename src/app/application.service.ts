import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/api/';  
  constructor(private http:HttpClient) { }  
  
  createEmployee(employee: object): Observable<object> {     
    return this.http.post(`${this.baseUrl}`+'employee', employee);   
  }
  createExperience(experience: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'experienceDetails', experience);  
  }

  createAlternative(alternative: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'alternativeContacts', alternative);  
  }

  createReference(reference: object): Observable<object> {     
    return this.http.post(`${this.baseUrl}`+'reference', reference);   
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'employees');
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
  
}
