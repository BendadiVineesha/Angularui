import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/employees';  
  constructor(private http:HttpClient) { }  
  
  createEmployee(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-employee', employee);  
  }  

}
