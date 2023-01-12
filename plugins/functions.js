export default ({ app }, inject) => {


  inject('URLSaveString',function(string){
    if(string){
      return string.replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
    }
    
  });
}