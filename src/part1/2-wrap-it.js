
export default function transformArgumentsToArray(transformingFunction) {
  return function(){
    try{
      return transformingFunction.apply(this, ...arguments);
    }catch(ex){
      ErrorHandler.Exception(ex);
    }
  };
}
