function isTouching(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 
      &&object2.x - object1.x < object1.width/2 + object2.width/2
      &&object1.y - object2.y < object1.height/2 + object2.height/2
      &&object2.y - object1.y < object1.height/2 + object2.height/2
        ){
        return true;
    
      }
      else {
        return false ;
    
      }
  }
  
  function bounceOff(object3,object4){
  
  if(object3.x - bouncingRect.x < object3.width/2 + bouncingRect.width/2
    && bouncingRect.x - object3.x < object3.width/2 + bouncingRect.width/2){
  
  
  
      object3.velocityX = object3.velocityX * -1;
  bouncingRect.velocityX = bouncingRect.velocityX * -1;
  
  }
  
  if(object3.y - bouncingRect.y < object3.height/2 + bouncingRect.height/2
    && bouncingRect.y - object3.y < object3.height/2 + bouncingRect.height/2){
  
  
  
      object3.velocityY = object3.velocityY * -1;
  bouncingRect.velocityY = bouncingRect.velocityY * -1;
  
    }
  
  }
      
  