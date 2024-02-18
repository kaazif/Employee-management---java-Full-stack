package com.example.ems.execption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExecption extends RuntimeException{

   public ResourceNotFoundExecption(String message){
       super(message);
   }
}
