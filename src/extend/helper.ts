
export class Helper{

    static title ="我是全局的title";

    static substring(str,start,end){

        if (end){
            return str.substring(start,end);
        }else{
            return str.substring(start);
        }
    }


}